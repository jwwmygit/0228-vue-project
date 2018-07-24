<template>
  <div id="InterContainer">
    <div class="layer-top">
    <img src="./images/top1.jpg" alt="" class="top1">
    <img src="./images/top2.jpg" alt="" class="top2">
    </div>
    <div class="layer-bottom">
      <img src="./images/bottom.jpg" alt="" class="bottom-img">

      <router-link to="/home">
        <span class="go-main"></span>
      </router-link>

    </div>
  </div>
</template>
<script>
    export default {}

</script>
<style lang="less" rel="stylesheet/less">
@import "../../common/less/mixins";
  #InterContainer{
    width: 100%;
    height: 100/@rem;
    background: red;
    .layer-top{
      width: 100%;
      .top1{
        width: 100%;
        height: 386/@rem;
        display: block;
      }
      .top2{
        width: 100%;
        height: 327/@rem;
        display: block;
      }
    }
    .layer-bottom{
      position: relative;
      .bottom-img{
        width: 100%;
        display: block;
      }
      .go-main{
        display: block;
        width:254/@rem ;
        height: 30/@rem;
        position: absolute;
        left: 244/@rem;
        top: 235/@rem;
      }
    }

  }
</style>
