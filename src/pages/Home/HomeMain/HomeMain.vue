<template>
  <div>
    <HeaderSwiper />
    <HeaderBrand/>
    <HomeNewProduct/>
    <HomeRecommended/>
    <HomeTimelimit/>
    <HomeProjectScroll/>
    <LivingHome/>
    <HomeFooter/>
  </div>
</template>
<script>
  import HeaderSwiper from '../../../components/HeaderSwiper/HeaderSwiper.vue'
  import HeaderBrand from '../../../components/HeaderBrand/HeaderBrand.vue'
  import HomeNewProduct from '../../../components/HomeNewProduct/HomeNewProduct.vue'
  import HomeRecommended from '../../../components/HomeRecommended/HomeRecommended.vue'
  import HomeTimelimit from '../../../components/HomeTimelimit/HomeTimelimit.vue'
  import HomeProjectScroll from '../../../components/HomeProjectScroll/HomeProjectScroll.vue'
  import LivingHome from '../../../components/LivingHome/LivingHome.vue'
  import HomeFooter from '../../../components/HomeFooter/HomeFooter.vue'
    export default {
      components:{
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
<style lang="less" rel="stylesheet/less">


</style>
