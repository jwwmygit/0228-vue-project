<template>
  <div class="cart">
    <div class="headerWrap">
        <div class="cart-title">购物车</div>
        <div class="juan">领劵</div>
    </div>
    <div class="headerContent">
      <div class="list">
        <div class="day">
          <span class="circle"></span>
          <span class="text">30天无忧退货</span>
        </div>
        <div class="day">
          <span class="circle"></span>
          <span class="text">48小时快速退款</span>
        </div>
        <div class="day">
          <span class="circle"></span>
          <span class="text">满88元免邮费</span>
        </div>
      </div>
      <div class="cartIcon">
        <img src="./images/shopcart.png" alt="">
        <div class="txt">去添加东西吧</div>
        <div class="login">登录</div>
      </div>


    </div>
  </div>
</template>
<script>
    export default {}

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
.cart{
  width: 100%;
  background: #ededed;
  .headerWrap{
    width: 100%;
    box-sizing: border-box;
    padding:0 20/@rem;
    height: 88/@rem;
    background: #fff;
    position: relative;
    .cart-title{
      font-size: 34/@rem;
      position: absolute;
      width: 120/@rem;
      height: 88/@rem;
      line-height: 88/@rem;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    .juan{
      float: right;
      font-size: 30/@rem;
      width: 80/@rem;
      height: 88/@rem;
      line-height: 90/@rem;
      color: #b4282d;

    }
  }
  .headerContent{
    width: 100%;
    height: 1246/@rem;
    position: relative;
    .cartIcon{
      width: 100%;
      height: 300/@rem;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      text-align: center;
      img{
        width: 248/@rem;
        height: 248/@rem;
      }
      .txt{
        width: 100%;
        font-size: 28/@rem;
        text-align: center;
        margin-bottom: 50/@rem;
      }
      .login{
        width: 480/@rem ;
        height: 92/@rem;
        line-height: 92/@rem;
        font-size: 28/@rem;
        color: #fff;
        background: #b4282d;
        margin: 0 135/@rem;

      }
    }
    .list{
      width: 100%;
      height: 70/@rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding: 20/@rem 30/@rem;
      .day{
        display: flex;
        .circle{
          display: inline-block;
          width: 10/@rem;
          height: 10/@rem;
          background-image: url("./images/circle.png");
          background-size: cover;
        }
        .text{
          height: 36/@rem;
          font-size: 24/@rem;
          color: #666;
        }

      }
    }


  }
}

</style>
