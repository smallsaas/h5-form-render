
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
      <view class="Card-Layout-Title">{{title}}</view>
      <slot></slot>
    </view>
  </view>
</template>

<script>
/* eslint-disable */
export default {
    name:"",
    methods:{
    },
	data(){
	  return {
	  };
	},
    props:{
      title:{
        type:String
      },
      Style:{
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
}
.Card-Layout-Content{
    width: 85%;
    margin: 20px auto;
    background: white;
    border-radius: 5px;
    padding:20px
}
.Card-Layout-Title{
    width: 100%;
    margin: 0 auto;
    font-size: 12px;
    font-weight: bolder;
}
</style>
