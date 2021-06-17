<template>
  <view>
    <card title="已定义样式" :Style="getStyle()">
    </card>
    <card title="默认样式">
      11111
    </card>
  </view>
</template>

<script>
import Card from '@/components/other/Card.vue'
export default {
  data(){
    return {
      Style:{
        fill:"green",
        padding:"0px",
        margin:"0px",
        stroke:{
          color:"black",
          lineWidth:"10px",
        },
        shadow:{
          radius:"10px",
          color:"gray",
          x:"0",
          y:"0"
        },
        alignment:"right",
        color:"#fff",
        font:"12px",
        justify:"center"
      }
    };
  },
  methods:{
    getStyle(){
      return this.Style
    },
  },
  components: { Card },
}
</script>

<style>

</style>
