<template>
    <view :class="[`base_signature_container ${param.inputBlock ? 'van_field_input_block' : ''}`]">
        <van-field
          name="signature"
          readonly
          :label="param.label"
          :required="param.required"
          :disabled="param.disabled"
          :style="param.style"
          :error="param.error"
          :error-message="param.error ? param['error-message'] ? param['error-message'] : '' : ''"
          label-class="van_field_label"
        >
          <template slot="input">
              <view class="field_input">
				  <button size="mini" @click="handleSignture">
					  {{param.value ? '修改签名' : '点击签名'}}
				  </button>
				  <view 
					  :style="{
						  backgroundImage: `url(${param.value})`
					  }"
					  class="image"
					  v-if="param.value" 
					  @click="handlePreview" 
				  />
			  </view>
          </template>
        </van-field>
        <mask v-if="showModal">
        	<view class="signature_content">
        		<view class="content-box">
                    <canvas 
                        class="mycanvas"
                        canvas-id="signature_canvas"  
                        disable-scroll="true" 
                        @touchstart="handleTouchstart"
                    	@touchmove="handleTouchmove" 
                        @touchend="handleTouchend"
                    />
                    <view class="buttons">
						<view class="but" @click="handleClear">重绘</view>
						<view class="but" @click="handleBack">返回</view>
						<view class="but primary" @click="finish">保存</view>
                    </view>
        		</view>
        	</view>
        </mask>
		<mask v-if="preViewModal">
			<view class="preview_image_content" @click="handleClosePreviewModal">
				<image mode="heightFix" :src="param.value" />
			</view>
		</mask>
	</view>
</template>

<script>
    import _ from 'lodash'
	import { pathToBase64 } from 'image-tools'
    import mask from '../mask/index.vue'
    export default {
        components: {
           mask 
        },
        data () {
            return {
                showModal: false,
                
                canvasContext: "",
                points: [], //路径点集合 
                image: "",
				preViewModal: false
            } 
        },
        props: {
            param: {
                type: Object,
                default: function() {
                    return { 
                        inputBlock: false,
                        checked: false,
                        required: false,
                        readonly: false,
                        error: false,
                        "error-message": "",
                        style: ""
                    }
                }
            }
        },
        methods: {
			handlePreview () {
				if (!_.get(this.param, 'value')) {
					return
				}
				this.preViewModal = true
			},
            handleSignture () {
                this.showModal = true
                this.initCanvas()
            },
            initCanvas() {
            	this.canvasContext = uni.createCanvasContext('signature_canvas', this);
            	//设置画笔样式
            	this.canvasContext.setLineWidth(4);
            	this.canvasContext.setLineCap('round');
            	this.canvasContext.setLineJoin('round');
            	// this.oc.setStrokeStyle("#ffffff");
            },
            
            //触摸开始，获取到起点
            handleTouchstart(e) {
            	// debugger
            	//   ctx.beginPath();
            	const startX = e.changedTouches[0].x;
            	const startY = e.changedTouches[0].y;
            	//   let startX = e.changedTouches[0].x;
            	//   let startY = e.changedTouches[0].y;
            	//   debugger
            	let startPoint = {
            		X: startX,
            		Y: startY
            	};
            	this.points.push(startPoint);
            	//每次触摸开始，开启新的路径
            	this.canvasContext.beginPath();
            },
            //触摸移动，获取到路径点
            handleTouchmove(e) {
            	let moveX = e.changedTouches[0].x;
            	let moveY = e.changedTouches[0].y;
            	let movePoint = {
            		X: moveX,
            		Y: moveY
            	};
            	this.points.push(movePoint); //存点
            	let len = this.points.length;
            	if (len >= 2) {
            		this.draw(); //绘制路径
            	}
            },
            // 触摸结束，将未绘制的点清空防止对后续路径产生干扰
            handleTouchend() {
            	this.points = [];
            },
            draw() {
            	let point1 = this.points[0]
            	let point2 = this.points[1]
            	this.points.shift()
            	this.canvasContext.moveTo(point1.X, point1.Y)
            	this.canvasContext.lineTo(point2.X, point2.Y)
            	this.canvasContext.stroke()
            	this.canvasContext.draw(true)
            },
            //清空画布
            handleClear() {
            	uni.getSystemInfo({
            		success: (res) => {
						const canvasw = res.windowWidth;
						const canvash = res.windowHeight;
						this.canvasContext.clearRect(0, 0, canvasw, canvash);
						this.canvasContext.draw(true);
						// this.canvasContext.get
					},
            	})
            },
            //保存
            finish() {
                if (_.get(this.canvasContext, 'subpath', []).length === 0) {
                    uni.showToast({
                        title: '请先签名',
                        icon: 'none'
                    })
                    return
                }
            	uni.showModal({
            		title: '温馨提示',
            		content: '确定保存签名吗？',
            		success: (response) => {
                        if (response.confirm) {
                            this.handleGenerate()
                        }
            		}
            	})
            },
            
            // 生成图片
            handleGenerate () {
                uni.canvasToTempFilePath({
                	x: 0,
                	y: 0,
                	canvasId: 'signature_canvas',
                	success: (resp) => {
						pathToBase64(resp.tempFilePath).then(url => {
							this.$emit('change', url)
							this.showModal = false
						})
                		//保存图片到本地
                		// this.saveImgToLocal(resp.tempFilePath);
                	},
                	fail: (response) => {
                		console.log('签名失败 = ', response);
                	}
                }, this)
            },
            
            //保存图片到本地
            saveImgToLocal(url){
            	uni.saveImageToPhotosAlbum({
            		filePath: url,
            		success: (response) => {
            			uni.showModal({
            				title: '提示',
            				content: '保存成功',
            				showCancel: false
            			})
            		},
            		fail: (response) => {
            			uni.openSetting({
            				success: (response) => {
            					if (!response.authSetting[
            							'scope.writePhotosAlbum'
            						]) {
            						uni.showModal({
            							title: '提示',
            							content: '获取权限成功，再次点击图片即可保存',
            							showCancel: false
            						})
            					} else {
            						uni.showModal({
            							title: '提示',
            							content: '获取权限失败，无法保存',
            							showCancel: false
            						})
            					}
            				}
            			})
            		}
            	})
            },
            
            handleBack () {
                this.showModal = false
                this.canvasContext = null
            },
			handleClosePreviewModal () {
				this.preViewModal = false
			}
        },
		beforeDestroy() {
			this.canvasContext = null
		}
	}
</script>

<style lang="less">
    @import './common.less';
    .base_signature_container {
        .field_input {
			.image {
				width: 170rpx;
				height: 170rpx;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				border: 1px solid #f2f2f2;
			}
		}
    }
    .signature_content {
        width: 100vw;
        height: 100vh;
        background-color: rbga(0, 0, 0, 0.6);
        .content-box {
            background-color: #fff;
            .mycanvas {
            	width: 100%;
            	height: calc(100vh - 162rpx);
            	background-color: aliceblue;
            }
            .buttons {
                display: flex;
                justify-content: center;
                text-align: center;
                padding: 40rpx 0;
                .but {
                    width: 20%;
                    border: 1px solid #f2f2f2;
                    padding: 20rpx 0;
                    border-radius: 12rpx;
                    font-size: 28rpx;
					margin: 0 5%;
                }
                .primary {
                    background-color: #2196f3;
                    color: #fff;
                }
                .but:active {
                    box-shadow: 0 0 16rpx rgba(0, 0, 0, 0.14);
                    transition: all .2s;
                }
            }
        }
    }
	.preview_image_content {
		background-color: #fff;
		height: 100vh;
		width: 100%;
		image {
			width: 100%;
			height: calc(100vh - 162rpx);
		}
	}
</style>
