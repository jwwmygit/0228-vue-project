<template>
  <div class="GoodsRecommendedScroll">
    <ul class="wrap">
      <li class="list" v-for="(item,index) in column ">
        <div class="content">
          <img :src="item.picUrl" alt="">
          <div class="txt">{{item.articleCount}}</div>
        </div>
        <span class="text">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
   import {mapState} from 'vuex'
   import BScroll from 'better-scroll'
    export default {
     computed:{
       ...mapState(['column'])
     },
      mounted(){
        this.$store.dispatch('getColumn',()=>{
           this.$nextTick(function () {
             new BScroll('.GoodsRecommendedScroll',{
               probeType: 2,  // 因为惯性滑动不会触发
               click: true,   //默认是禁止点击的
               scrollX: true,
               scrollY:false
             })
           })
        })
      }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  @import "../../common/less/clearfix";
  .GoodsRecommendedScroll{
    overflow: hidden;
    width: 100%;
    background: #fff;
    .wrap{
      float: left;
      white-space: nowrap;
      padding:32/@rem 30/@rem;
      .list{
        display: inline-block;
        width: 164/@rem;
        height: 210/@rem;
        margin-right: 20/@rem;
        .content {
          width: 164/@rem;
          height: 164/@rem;
          background: deeppink;
          margin-bottom: 22/@rem;
          position: relative;
          .txt{
            width: 140/@rem;
            height: 32/@rem;
            text-align: center;
            line-height: 32/@rem;
            font-size: 24/@rem;
            color: #fff;
            position: absolute;
            left: 0;
            top: 0;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
        .text{
          display: block;
          width: 154/@rem;
          font-size: 24/@rem;
          text-align: center;
          line-height: 24/@rem;
          color: #333;
        }


      }
    }
  }

</style>
