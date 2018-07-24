<template>
  <header class="HomeTimelimit">
    <div class="shoping">
      <div class="shoping-wrap">
        <div class="snap-up">
          <h4>严选限时购</h4>
          <span class="squire">00</span><span class="dot">:</span><span class="squire">42</span><span class="dot">:</span><span class="squire">03</span>
          <h5>下一场14:00开始</h5>
        </div>
        <div class="price">
          <img :src="flashSaleIndexVO.primaryPicUrl" alt="">
        </div>
      </div>
    </div>
    <div class="welfare">
      <img src="./images/welfare/01.jpg" alt="">
    </div>
  </header>
</template>
<script>
  import {mapState}from 'vuex'
    export default {
    computed:{
      ...mapState(['flashSaleIndexVO'])
    },
      mounted(){
      this.$store.dispatch('getFlashSaleIndexVO')
      }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
.HomeTimelimit{
  .shoping{
    width: 100%;
    height: 380/@rem;
    background: #ededed;
    border: 1px solid transparent;
    .shoping-wrap{
      width: 100%;
      padding: 10/@rem 40/@rem;
      margin-top: 20/@rem;

      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .snap-up{
        width: 334/@rem;
        height: 320/@rem;
        padding: 100/@rem 20/@rem;
        box-sizing: border-box;
        &>span{
          font-size: 28/@rem;
          line-height: 56/@rem;
          text-align: center;
          color: #fff;
          margin-bottom: 30/@rem;
          &.squire{
            display: inline-block;
            width: 62/@rem;
            height: 56/@rem;
            background: black;
          }
          &.dot{
            font-weight: bold;
            color: black;
            display: inline-block;
            margin: 0 10/@rem;
          }
        }
        h4{
          font-size: 32/@rem;
          line-height: 32/@rem;
          color: #333;
          margin-bottom: 20/@rem;
        }
        h5{
          font-size: 24/@rem;
          line-height: 24/@rem;
          color: #333;
        }
      };
      .price{
        width: 320/@rem;
        height: 320/@rem;
        img{
          width: 100%;
        }
    }
    }
  }
  .welfare{
    width: 100%;
    height: 300/@rem;
    img{
      width: 100%;
      background-size: cover;
    }
  }
}


</style>
