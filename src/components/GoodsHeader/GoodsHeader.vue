<template>
  <header class="GoodsHeader">
    <div class="icon-wrap">
      <div class="icon-home" @click="goback"></div>
      <div class="icon-wy"></div>
      <div class="icon-cart"></div>
      <div class="icon-search"></div>

    </div>
  </header>
</template>
<script>
    export default {
      methods:{
        goback(){
          this.$router.replace('/home')
        }
      }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
 .GoodsHeader{
   width: 100%;
   height: 88/@rem;
   background: #fff;
   position: fixed;
   padding:0 20/@rem;
   box-sizing: border-box;
   border: 1/@rem solid #ccc;
   left: 0;
   top: 0;
   z-index: 100;

   .icon-wrap{
     overflow: hidden;
     height: 100%;
     position: relative;
     .icon-home{
       float: left;
       margin-top: 20/@rem;
       width: 48/@rem;
       height: 44/@rem;
       background-image: url("./images/xb.png");
       background-size: 172/@rem 398/@rem;
       background-position: 0 -74/@rem;
     }
     .icon-wy{
       width: 172/@rem;
       height: 54/@rem;
       position: absolute;
       left: 0;
       top: 0;
       margin: auto;
       bottom: 0;
       right: 0;
       background-image: url("./images/xb.png");
       background-size: 172/@rem 398/@rem;
       background-position: 0 -128/@rem;
     }
     .icon-cart{
       margin-top: 13/@rem;
       float: right;
       width:64/@rem;
       height: 64/@rem;
       background-image: url("./images/xb.png");
       background-size: 172/@rem 398/@rem;
       background-position: 0 0;
     }
     .icon-search{
       margin-top: 20/@rem;
       width:64/@rem;
       height: 64/@rem;
       margin-right: 20/@rem;
       float: right;
       background-image: url("./images/xb.png");
       background-size: 172/@rem 398/@rem;
       background-position: 0 -344/@rem;

     }


   }


 }
</style>
