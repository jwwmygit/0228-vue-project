<template>
  <div class="HeaderSwiper" >

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(focus,index) in focusList">
          <img :src="focus.picUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination my-pagination-current"></div>
    </div>
    <div class="indexServiceContainer">
      <div class="index-content">
       <a class="list">
         <span class="icon">
           <img src="./images/icon/arrow.png" alt="">
         </span>
         <span class="txt">网易自营品牌</span>
       </a>
        <a class="list">
          <span class="icon">
            <img src="./images/icon/arrow.png" alt="">
          </span>
          <span class="txt">30天无忧退货</span>
        </a>
        <a class="list">
          <span class="icon">
            <img src="./images/icon/arrow.png" alt="">
          </span>
          <span class="txt">48小时快速退款</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import {mapState}from 'vuex'
  export default {
    computed:{
      ...mapState(['focusList'])
    },
    mounted(){
      this.$store.dispatch('getFocusList',()=>{
        this.$nextTick(function () {
          var mySwiper = new Swiper ('.swiper-container', {
            eventPassthrough: 'vertical',
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              currentClass : 'my-pagination-current',

            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
        })
      })

    }
  }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
 .HeaderSwiper{
   width: 100%;
   margin-top: 158/@rem;
   .swiper-container{
     width: 100%;
     img{
       width: 100%;
       height: 472/@rem;
       display: block;
     }
     .my-pagination-current{
       .swiper-pagination-bullet{
         width: 22/@rem;
         height: 4/@rem;
         background: red;
       }

     }
   }
   .indexServiceContainer{
     width: 100%;
     height: 72/@rem;
     .index-content{
       height: 72/@rem;
       padding: 0 20/@rem;
       display: flex;
       align-items: center;
       justify-content: center;
       .list{
         width: 227/@rem;
         height: 32/@rem;
         display: flex;
         align-items: center;
         justify-content: center;
         .icon{
           display: inline-block;
           margin-top: -9/@rem;
           margin-right: 6/@rem;
           img{
             width: 32/@rem;
             height: 32/@rem;
             vertical-align: middle;
           }
         }

         .txt{
           font-size: 24/@rem;
         }
       }

     }
   }
 }

</style>
