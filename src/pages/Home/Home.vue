<template>
  <div id="homeContainer">
    <HomeHeader name="top"/>
    <HeaderSwiper />
    <HeaderBrand/>
    <HomeNewProduct/>
    <HomeRecommended/>
    <HomeTimelimit/>
    <HomeProjectScroll/>
    <LivingHome/>
    <HomeFooter/>
    <a class="top"  href="#top"></a>
  </div>
</template>
<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'
  import HeaderSwiper from '../../components/HeaderSwiper/HeaderSwiper.vue'
  import HeaderBrand from '../../components/HeaderBrand/HeaderBrand.vue'
  import HomeNewProduct from '../../components/HomeNewProduct/HomeNewProduct.vue'
  import HomeRecommended from '../../components/HomeRecommended/HomeRecommended.vue'
  import HomeTimelimit from '../../components/HomeTimelimit/HomeTimelimit.vue'
  import HomeProjectScroll from '../../components/HomeProjectScroll/HomeProjectScroll.vue'
  import LivingHome from '../../components/LivingHome/LivingHome.vue'
  import HomeFooter from '../../components/HomeFooter/HomeFooter.vue'

    export default {
    components:{
      HomeHeader,
      HeaderSwiper,
      HeaderBrand,
      HomeNewProduct,
      HomeRecommended,
      HomeTimelimit,
      HomeProjectScroll,
      LivingHome,
      HomeFooter
    }
    }

</script>
<style  lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
   #homeContainer{
     width: 100%;
     background: #ededed;
     overflow: hidden;
     .top{
       width: 82/@rem;
       height: 82/@rem;
       background-image: url("./images/top.png");
       background-size: cover;
       background-repeat: no-repeat;
       position: fixed;
       right: 0;
       bottom: 100/@rem;
     }
}

</style>
