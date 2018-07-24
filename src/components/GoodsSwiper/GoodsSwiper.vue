<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banner">
        <div class="mask">
          <p class="txt1">--{{item.subTitle}}--</p>
          <p class="txt2">{{item.title}}</p>
          <p class="txt3">{{item.desc}}</p>
        </div>
        <img :src="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['banner'])
      },
       mounted(){
         this.$store.dispatch('getBanner',()=>{
           this.$nextTick(function () {
             new Swiper ('.swiper-container', {
               loop: true,
               // 如果需要滚动条
             })
           })
         })

       }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
    .swiper-container{
       margin-top: 90/@rem;
       background: #fff;
       .swiper-wrapper{
         .swiper-slide{
           width: 690/@rem;
           height: 385/@rem;
           border-radius: 10/@rem;
           padding: 0 10/@rem;
           overflow: hidden;
           position: relative;
           .mask{
             width: 400/@rem;
             height: 150/@rem;
             background: rgba(255,255,255,0.9);
             position: absolute;
             left:0;
             top: 0;
             bottom: 0;
             right: 0;
             margin: auto;
             text-align: center;
             line-height: 50/@rem;
             .txt1{
               font-size: 22/@rem;
               color: #7f7f7f;
             }
             .txt2{
               font-size: 28/@rem;
               color: #333;
             }
             .txt3{
               font-size: 24/@rem;
               color: #7f7f7f;
             }

           }
           img{
             width: 100%;
             height: 100%;
           }
         }
       }

    }

</style>
