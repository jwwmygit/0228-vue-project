<template>
  <div class="GoodsPick"  v-if="recommend.recommendBanner">
    <div class="pick">为你推荐</div>
    <div class="pick-content" v-if="recommend.recommendBanner">
      <div class="top-txt">{{recommend.recommendBanner.nickname}}</div>
      <img :src="recommend.recommendBanner.picUrl" alt="">
    </div>
    <div class="style" v-if="recommend.recommendBanner">
      <div class="select">
        <p>{{recommend.recommendBanner.subtitle}}</p>
        <p>{{recommend.recommendBanner.priceInfo}}元起</p>
      </div>
      <p class="text">{{recommend.recommendBanner.title}}</p>
    </div>
    <div class="pick-list" v-if="recommend.recommends" v-for="(item,index) in recommend.recommends">
      <div class="info">
        <div class="author">
          <div class="flag"><img :src="item.avatar" alt=""></div>
          <div class="name">{{item.nickname}}</div>
        </div>
        <p class="tea ellipsis">{{item.title}}</p>
        <p class="yun ellipsis">{{item.subtitle}}</p>
      </div>
      <div class="logo">
        <div class="rc">{{item.typeName}}</div>
        <img :src="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
 import {mapState} from 'vuex'
    export default {
   computed:{
     ...mapState(['recommend'])
   },
      mounted(){
        this.$store.dispatch('getRecommend')
      }
    }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
.GoodsPick{
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 0 20/@rem;
  .pick{
    width:100% ;
    height: 120/@rem;
    text-align: center;
    font-size: 30/@rem;
    line-height: 120/@rem;

  }
  .pick-content{
    border: 1/@rem solid #d9d9d9;
    width: 100%;
    height: 386/@rem;
    border-radius: 20/@rem;
    overflow: hidden;
    position: relative;
    img{
      width: 100%;
    }
    .top-txt{
      width: 130/@rem;
      font-size: 24/@rem;
      line-height:36/@rem ;
      height: 36/@rem;
      text-align: center;
      position: absolute;
      left: 30/@rem;
      top: 25/@rem;
      background: #fff;
      border-radius: 20/@rem;

    }


   }
  .style{
    border-bottom: 1/@rem solid #d9d9d9;
    border-left: 1/@rem solid #d9d9d9;
    border-right: 1/@rem solid #d9d9d9;


    width: 100%;
    height: 186/@rem;
    padding: 24/@rem 20/@rem 67/@rem;
    box-sizing: border-box;
    font-size: 28/@rem;
    .select{
      display: flex;
      font-size: 30/@rem;
      justify-content: space-around;
      margin-bottom: 20/@rem;

    }
    .text{
      color: #7f7f7f;
      margin-left: 28/@rem;
    }
  }
  .pick-list{
    width: 100%;
    border: 1/@rem solid #d9d9d9;
    margin: 30/@rem 0;
    display: flex;
    .info{
      width: 408/@rem;
      height: 272/@rem;
      box-sizing: border-box;
      padding: 0 20/@rem;
      .author{
        width: 100%;
        display: flex;
        align-items: center;
        margin: 30/@rem 0;
        .flag{
          width: 46/@rem;
          height: 46/@rem;
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 46/@rem;
            height: 46/@rem;
          }
        }
        .name{
          font-size: 22/@rem;
          margin-left: 10/@rem;
        }

      }
      .tea{
        font-size: 30/@rem;
        margin-bottom: 30/@rem;
      }
      .yun{
        font-size: 28/@rem;
        color: #7f7f7f;
      }
    }
    .logo{
      width: 280/@rem;
      height: 272/@rem;
      margin-left: 18/@rem;
      position: relative;
      .rc{
        width: 202/@rem;
        height: 36/@rem;
        background: #fff;
        line-height: 36/@rem;
        position: absolute;
        left: 12/@rem;
        top: 10/@rem;
        border-radius: 20/@rem;
        text-align: center;
        font-size: 22/@rem;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}

</style>
