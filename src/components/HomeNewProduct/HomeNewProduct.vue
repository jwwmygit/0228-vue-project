<template>
  <div class="HomeNewProduct">
    <div class="NewProductHeader">
      <span>新品首发</span>
      <a class="look">
        <a href="#">查看全部</a>
        <img src="./images/newProduct/right.png" alt="">
      </a>
    </div>
    <div class="NewProductScroll">
     <div class="NewProductSwiper1">
       <ul class="list">
         <li class="item" v-for="(tag,index) in newItemList">
           <div class="icon">
             <img :src="tag.listPicUrl" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">{{tag.name}}</div>
             <div class="content ellipsis">{{tag.simpleDesc}}</div>
             <div class="price ellipsis">￥{{tag.retailPrice}}</div>
           </div>
         </li>
         <!--<li class="item">
           <div class="icon">
             <img src="./images/newProduct/03.png" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">网易制造3D1111111111111111111111111111</div>
             <div class="content ellipsis">创造可逆模式空气</div>
             <div class="price ellipsis">￥499</div>
           </div>
         </li>
         <li class="item">
           <div class="icon">
             <img src="./images/newProduct/03.png" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">网易制造3D1111111111111111111111111111</div>
             <div class="content ellipsis">创造可逆模式空气</div>
             <div class="price ellipsis">￥499</div>
           </div>
         </li>
         <li class="item">
           <div class="icon">
             <img src="./images/newProduct/03.png" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">网易制造3D1111111111111111111111111111</div>
             <div class="content ellipsis">创造可逆模式空气</div>
             <div class="price ellipsis">￥499</div>
           </div>
         </li>
         <li class="item">
           <div class="icon">
             <img src="./images/newProduct/03.png" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">网易制造3D1111111111111111111111111111</div>
             <div class="content ellipsis">创造可逆模式空气</div>
             <div class="price ellipsis">￥499</div>
           </div>
         </li>
         <li class="item">
           <div class="icon">
             <img src="./images/newProduct/03.png" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">网易制造3D1111111111111111111111111111</div>
             <div class="content ellipsis">创造可逆模式空气</div>
             <div class="price ellipsis">￥499</div>
           </div>
         </li>
         <li class="item">
           <div class="icon">
             <img src="./images/newProduct/03.png" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">网易制造3D1111111111111111111111111111</div>
             <div class="content ellipsis">创造可逆模式空气</div>
             <div class="price ellipsis">￥499</div>
           </div>
         </li>
         <li class="item">
           <div class="icon">
             <img src="./images/newProduct/03.png" alt="">
           </div>
           <div class="textContaner">
             <div class="title ellipsis">网易制造3D1111111111111111111111111111</div>
             <div class="content ellipsis">创造可逆模式空气</div>
             <div class="price ellipsis">￥499</div>
           </div>
         </li>-->
       </ul>
     </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapState}from 'vuex'
    export default {
    computed:{
      ...mapState(['newItemList'])
    },
      mounted(){
      this.$store.dispatch('getNewItemList')
        this.$nextTick(() => {
          new BScroll('.NewProductSwiper1', {
            eventPassthrough: 'vertical',
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true,
            scrollY:false
          })
        })
      }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
@import "../../common/less/mixins";
  .HomeNewProduct{
    width: 100%;
    background: #fff;
    .NewProductHeader{
      height: 260/@rem;
      background: url("./images/newProduct/bg.png");
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &>span{
        font-size: 36/@rem;
      }
      .look{
        display: block;
        &>a{
          font-size: 28/@rem;
        }
        &>img{
          width: 10/@rem;
          height: 22/@rem;
          vertical-align: middle;
        }
      }


    }
    .NewProductScroll{
      width: 100%;
      height: 480/@rem;
      .NewProductSwiper1{
        overflow: hidden;
        padding: 10/@rem;
        display: flex;
        .list{
          display: flex;
          .item{
            flex-shrink: 0;
            width: 280/@rem;
            height: 416/@rem;
            margin: 0 10/@rem;
            .icon{
              width: 280/@rem;
              height: 260/@rem;
              padding-bottom: 40/@rem;
              background-color: #f4f4f4;
              &>img{
                width: 100%;
              }
            }
            .textContaner{
              margin: 0 40/@rem;
              .title{
                font-size: 28/@rem;
                margin: 10/@rem 0;
              }
              .content{
                font-size: 24/@rem;
                margin: 10/@rem 0;
              }
              .price{
                font-size: 28/@rem;
                color: red;
              }
            }

          }
        }

      }
    }


  }

</style>
