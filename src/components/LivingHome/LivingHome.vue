<template>
  <div class="footer-wrap">
    <div class="LivingHome" v-for="(tcate,index) in tcateList ">
      <div class="LivingHomeHeader" >
        <p >{{tcate.name}}</p>
      </div>
      <div class="LivingContent">
        <ul class="list">
          <li class="item" v-if="tcate.itemList" v-for="(item,index) in tcate.itemList ">
            <div class="img">
              <img v-lazy="item.listPicUrl" alt="">
            </div>
            <div class="title">{{item.simpleDesc}}</div>
            <p class="name-shop">{{item.name}}</p>
            <p class="price">￥{{item.couponPrice}}</p>
          </li>
          <li class="item">
           <h5>更多好物</h5>
           <span class="right"></span>
          </li>
          <!--
          <li class="item">
            <div class="img">
              <img src="./images/jujia/01.png" alt="">
            </div>
            <div class="title">透气吸汗吗皮肤</div>
            <p class="name-shop">自然麻雀四件套</p>
            <p class="price">￥599</p>
          </li>
          <li class="item">
            <div class="img">
              <img src="./images/jujia/01.png" alt="">
            </div>
            <div class="title">透气吸汗吗皮肤</div>
            <p class="name-shop">自然麻雀四件套</p>
            <p class="price">￥599</p>
          </li>
          <li class="item">
            <div class="img">
              <img src="./images/jujia/01.png" alt="">
            </div>
            <div class="title">透气吸汗吗皮肤</div>
            <p class="name-shop">自然麻雀四件套</p>
            <p class="price">￥599</p>
          </li>
          <li class="item">
            <div class="img">
              <img src="./images/jujia/01.png" alt="">
            </div>
            <div class="title">透气吸汗吗皮肤</div>
            <p class="name-shop">自然麻雀四件套</p>
            <p class="price">￥599</p>
          </li>
          <li class="item">
            <div class="img">
              <img src="./images/jujia/01.png" alt="">
            </div>
            <div class="title">透气吸汗吗皮肤</div>
            <p class="name-shop">自然麻雀四件套</p>
            <p class="price">￥599</p>
          </li>
          <li class="item">
            <div class="img">
              <img src="./images/jujia/01.png" alt="">
            </div>
            <div class="title">透气吸汗吗皮肤</div>
            <p class="name-shop">自然麻雀四件套</p>
            <p class="price">￥599</p>
          </li>-->
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
    export default {
    computed:{
      ...mapState(['tcateList'])
    },
      mounted(){
      this.$store.dispatch('getTcateList')
      }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  .LivingHome{
    width: 100%;
    background: #fff;
    margin-top: 20/@rem;
    .LivingHomeHeader{
      width: 100%;
      height: 120/@rem;
      line-height: 120/@rem;
      p{
        font-size: 28/@rem;
        text-align: center;
        color: #333;
      }
    }
    .LivingContent{
      width: 100%;
      .list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10/@rem;
        .item{
         flex-shrink: 0;
          width: 347/@rem;
          height: 537/@rem;
          margin-left: 10/@rem;
          margin-top: 10/@rem;
          background: #f4f4f4;
          position: relative;
          &>h5{
            font-size: 32/@rem;
            text-align: center;
            line-height: 537/@rem;
            width: 100%;
            height: 100%;
          }
          .right{
            display: block;
            width: 67/@rem;
            height: 67/@rem;
            background-image: url("./images/jujia/right.png");
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            left: 140/@rem;
            top: 340/@rem;
          }
          .img{
            width: 345/@rem;
            height: 345/@rem;
            img{
              width: 100%;
            }
          }
          .title{
            width: 345/@rem;
            height: 68/@rem;
            line-height: 68/@rem;
            font-size: 24/@rem;
            box-sizing: border-box;
            padding-left: 10/@rem;
            background: #F1ECE2;
          }
          .name-shop{
            font-size: 28/@rem;
            line-height: 28/@rem;
            margin: 20/@rem 10/@rem;

          }
          .price{
            font-size: 28/@rem;
            margin-left: 10/@rem;
            color: red;
          }

        }
      }
    }
  }
</style>
