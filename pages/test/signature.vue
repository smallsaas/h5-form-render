<template>
	<view class="container">

		<view class="content-box">
			<view class="button" @tap="initCanvas" v-show="!showCanvas">签名</view>
			<view v-show="showCanvas">
				<canvas canvas-id="canvasid" class="mycanvas" disable-scroll="true" @touchstart="ontouchstart"
					@touchmove="touchmove" @touchend="touchend"></canvas>
				<view class="footer">
					<view class="left" @click="finish">保存</view>
					<view class="right" @click="clear">清除</view>
					<view class="close" @click="close">关闭</view>
				</view>
			</view>

			<image :src="image" />


		</view>
	</view>
</template>

<script>
	var x = 20;
	var y = 20;
	export default {
		data() {
			return {
				headerStyleHeight: 0,
				headerStyleTop: 0,
				oc: "",
				points: [], //路径点集合 
				showCanvas: false, //
				image: ""
			};
		},

		methods: {
			close: function() {
				this.showCanvas = false;
				this.clear();
			},
			initCanvas() {
				this.showCanvas = true;
				this.oc = uni.createCanvasContext('canvasid');
				console.log(this.oc);
				//设置画笔样式
				this.oc.lineWidth = 4;
				this.oc.lineCap = "round";
				this.oc.lineJoin = "round";
				// this.oc.setStrokeStyle("#ffffff");

			},
			ontouchend(e) {
				oc.ontouchmove = null;
			},
			ontouchmove(e) {
				const {
					clientX,
					clientY
				} = e.changedTouches[0];
				oc.lineTo(clientX - oc.offsetLeft, clientY - oc.offsetTop);
				oc.stroke();
			},
			//触摸开始，获取到起点

			ontouchstart(e) {
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
				this.oc.beginPath();
			},
			//触摸移动，获取到路径点
			touchmove(e) {
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
			touchend() {
				this.points = [];
			},

			/* ***********************************************
			#   绘制笔迹
			#   1.为保证笔迹实时显示，必须在移动的同时绘制笔迹
			#   2.为保证笔迹连续，每次从路径集合中区两个点作为起点（moveTo）和终点(lineTo)
			#   3.将上一次的终点作为下一次绘制的起点（即清除第一个点）
			************************************************ */
			draw() {
				let point1 = this.points[0]
				let point2 = this.points[1]
				this.points.shift()
				this.oc.moveTo(point1.X, point1.Y)
				this.oc.lineTo(point2.X, point2.Y)
				this.oc.stroke()
				this.oc.draw(true)
			},
			//清空画布
			clear() {
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						let canvasw = res.windowWidth;
						let canvash = res.windowHeight;
						that.oc.clearRect(0, 0, canvasw, canvash);
						that.oc.draw(true);
					},
				})
			},
			//保存
			finish() {
				uni.showModal({
					title: '提示',
					content: '确定保存签名吗',
					success: (response) => {
						uni.canvasToTempFilePath({
							// x: response.windowWidth / 2 - 150,
							x: response.windowWidth,
							y: 0,
							height: response.windowWidth,
							width: response.windowHeight,
							canvasId: 'canvasid',
							success: (resp) => {
								//图片转base64
								this.urlTobase64(resp.tempFilePath);
								//保存图片到本地
								// this.saveImgToLocal(resp.tempFilePath);
							},
							fail: (response) => {
								console.log('签名失败 = ', response);
							}
						}, this);
					}
				})
			},
			//图片转base64
			urlTobase64(url) {
				var toBase64Url;
				uni.request({
					url: url,
					method: 'GET',
					responseType: 'arraybuffer',
					success: async res => {
						let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
						toBase64Url = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
						console.log(toBase64Url);
					}
				});
			},
			
			//保存图片到本地
			saveImgToLocal(url){
				uni.saveImageToPhotosAlbum({
					filePath: url,
					success: (response) => {
						console.log('签名保存成功 = ', response);
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
			}
		},

		created() {},

	};
</script>

<style lang="scss">
	.button {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		border: 1px solid #bbbbbb;
	}

	.header-box {
		width: 100%;
		background-color: #ffffff;
		padding-bottom: 20rpx;
		color: red;
	}

	.content-box {
		width: 100%;
		height: 500px;
		//   background-color: aliceblue;
		padding: 20rpx;
		box-sizing: border-box;
	}

	.signature {
		position: fixed;
		top: 10px;
		left: 2%;
		z-index: 999;
		width: 96%;
	}

	page {
		background: #fff;
	}

	.container {

		padding: 20rpx 0 120rpx 0;
		box-sizing: border-box;
	}

	.title {
		height: 50upx;
		line-height: 50upx;
		font-size: 16px;
	}

	.mycanvas {
		width: 100%;
		// height: calc(100vh - 200upx);
		height: 300px;
		background-color: aliceblue;
	}

	.footer {
		font-size: 14px;
		height: 150upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.left,
	.right,
	.close {
		line-height: 100upx;
		height: 100upx;
		width: 220upx;
		text-align: center;
		font-weight: bold;
		color: white;
		border-radius: 5upx;
	}

	.left {
		background: #007AFF;
	}

	.right {
		background: orange;
	}

	.close {
		background: #A3A3A3;
	}
</style>
