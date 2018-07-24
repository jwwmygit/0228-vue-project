<template>
  <div class="GoodsWonderful">
    <div class="GoodsWonderfulHeader">
      <span class="more">更多精彩</span>
      <div class="line"></div>
    </div>
    <div class="GoodsWonderfulContent" v-for="(find,index) in findMore" :key="index">
      <div class="imgWrap">
        <img :src="find.itemPicUrl" alt="">
      </div>
      <div class="titleWrap">{{find.title}}</div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
    computed:{
      ...mapState(['findMore'])
   },
      mounted(){
        this.$store.dispatch('getFindMore')
        console.log(this.findMore)
      }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
.GoodsWonderful{
  width: 100%;
  padding: 20/@rem;
  .GoodsWonderfulHeader{
    height: 120/@rem;
    line-height: 120/@rem;
    font-size: 30/@rem;
    position: relative;
    text-align: center;
    .line{
      width: 750/@rem;
      height: 1/@rem;
      background: rgba(0,0,0,0.1);
      position: absolute;
      left:0;
      top: 50%;
      z-index: 0;

    }
  }
  .GoodsWonderfulContent{
    width: 100%;
    background: #fff;
    .imgWrap{
      width: 100%;
      height: 360/@rem;
      box-sizing: border-box;
      padding: 20/@rem 40/@rem 20/@rem 20/@rem;
      img{
        width: 100%;
        height: 100%;
      }

    }
    .titleWrap{
      font-size: 28/@rem;
      height: 100/@rem;
      line-height: 90/@rem;
      padding-left: 20/@rem;
      box-sizing: border-box;
    }
  }
}

</style>
