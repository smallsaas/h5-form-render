<template>
  <div>
    <card title="已定义样式" :Style="getStyle()">
      11111
    </card>
    <card title="默认样式">
      11111
    </card>
  </div>
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
        font:"微软雅黑",
        justify:"left"
      }
    };
  },
  methods:{
    getStyle(){
      return this.Style
    }
  },
  components: { Card },
}
</script>

<style>

</style>
