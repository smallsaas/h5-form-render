
<template>
  <view class="Card-Layout">
    <view class="Card-Layout-Content" @click="con()" :style="{'background':Style===undefined?'':Style.fill,
			'padding':Style===undefined?'':Style.padding,
			'margin':Style===undefined?'':Style.margin,
			'border':Style===undefined?'':Style.stroke===undefined?'':Style.stroke.lineWidth+' '+Style.stroke.color+' solid',
			'box-shadow':Style===undefined?'':Style.shadow===undefined?'':Style.shadow.x+' '+Style.shadow.y+' '+Style.shadow.radius+' '+Style.shadow.radius+' '+Style.shadow.color,
			'float':Style===undefined?'':Style.alignment==='center'?'':Style.alignment,
			'color':Style===undefined?'':Style.color,
			'font':Style===undefined?'':Style.font,
			'textAlign':Style===undefined?'':Style.justify}">
			<view class="Card-Layout-Title" :style="{
			'color':Style===undefined?'':Style.title.color,
			'background':Style===undefined?'':Style.title.fill,
			'padding':Style===undefined?'':Style.title.padding===undefined?'':Style.title.padding,
			'margin':Style===undefined?'':Style.title.margin===undefined?'':Style.title.margin,
			'textAlign':Style===undefined?'':Style.title.align,
			'font':Style===undefined?'':Style.title.font,
			}"
			>{{title}}
			<span v-if="jump" @click="jumpUrl()" style="position: absolute;right: 5px;color: #1A5EB5;font-size: 14px;">跳过</span>
			</view>
      <view class="Card-Layout-Child">
				<slot></slot>
			</view>
    </view>
  </view>
</template>

<script>
/* eslint-disable */
export default {
    name:"card",
    methods:{
			jumpUrl(){
				uni.navigateTo({
					url:'/pages'+this.url
				})
			}
    },
	data(){
	  return {
	  };
	},
    props:{
			url:String,
      title:{
        type:String
      },
			jump:Boolean,
      Style:{
				title:{
					color:{
						type:String
					},
					fill:{
						type:String
					},
					padding:{
						type:String
					},
					margin:{
						type:String
					},
					align:{
						type:String
					},
					font:{
						type:String
					}
				},
        fill:{
          type:String
        },
        padding:{
          type:String
        },
        margin:{
          type:String
        },
        stroke:{
          color:{
            type:String
          },
          lineWidth:{
            type:String
          }
        },
        shadow:{
          radius:{
            type:String
          },
          color:{
            type:String
          },
          x:{
            type:String
          },
          y:{
            type:String
          }
        },
        alignment:{
          type:String
        },
        color:{
          type:String
        },
        font:{
          type:String
        },
        justify:{
          type:String
        }
      }
    }
}
</script>

<style lang="scss">
.Card-Layout{
    width: 100%;
    overflow: hidden;
		// margin: 20px auto;
}
.Card-Layout-Content{
    width: 100%;
    margin: 0px auto;
    background: white;
    border-radius: 5px;
    padding: 0;
}
.Card-Layout-Title{
    width: 100%;
    padding:10px;
    font-size: 12px;
    font-weight: bolder;
		border-bottom: 2px solid #EEEEEE;
}
.Card-Layout-Child{
	font-size: 12px;
	// font-weight: bolder;
	overflow: hidden;
	height: auto;
}
</style>
