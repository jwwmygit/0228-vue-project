<template>
  <nav id="footerContainer">
      <span class="footer-guide" @click="goPath('/home')">
        <p class="home" :class="{on: '/home'===$route.path}"></p>
        <span>首页</span>
      </span>
      <span class="footer-guide" @click="goPath('/goods')">
        <p class="goods" :class="{on: '/goods'===$route.path}"></p>
        <span>识物</span>
      </span>
      <span class="footer-guide" @click="goPath('/classification')">
        <p class="classification" :class="{on: '/classification'===$route.path}"></p>
        <span>分类</span>
      </span>
      <span class="footer-guide" @click="goPath('/cart')">
        <p class="cart" :class="{on: '/cart'===$route.path}"></p>
        <span> 购物车</span>
      </span>
      <span class="footer-guide" @click="goPath('/personal')">
        <p class="personal" :class="{on: '/personal'===$route.path}"></p>
        <span>个人</span>
      </span>
  </nav>
</template>
<script>
    export default {
      methods:{
        goPath(path){
          this.$router.replace(path)
        }
      }
    }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  #footerContainer{
    width: 100%;
    height:98/@rem ;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    z-index: 100;
    background: #fafafa;
    border-top:1px solid #d9d9d9;
    .footer-guide{
      display: block;
      flex-grow: 1;
      margin-left: 50/@rem;
      font-size: 24/@rem;
      &>p:first-child{
        width: 40/@rem;
        height: 40/@rem;
        background-image: url("./images/footer.png");
        background-repeat: no-repeat;
        background-size: (40/@rem) (490/@rem);
        margin-left: 10/@rem;
        &.home{
          background-position: (0) (-250/@rem);
          margin-left: 5/@rem;
          &.on{
            background-position: (0) (-200/@rem);
          }
        }
        &.goods{
          margin-left: 6/@rem;
          background-position: (0) (-350/@rem);
          &.on{
            background-position: (0) (-300/@rem);
          }
        }
        &.classification{
          margin-left: 4/@rem;
          background-position: (0) (-150/@rem);
          &.on{
            background-position: (0) (-100/@rem);
          }
        }
        &.cart{
          margin-left: 10/@rem;
          background-position: (0) (-50/@rem);
          &.on{
            background-position: (0) (0);
          }
        }
        &.personal{
          margin-left: 6/@rem;
          background-position: (0) (-450/@rem);
          &.on{
            background-position: (0) (-400/@rem);
          }
        }
      }
    }
  }

</style>
