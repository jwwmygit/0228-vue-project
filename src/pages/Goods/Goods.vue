<template>
  <div class="goods">
    <GoodsHeader/>
    <GoodsSwiper/>
    <GoodsRecommendedScroll/>
    <GoodsPick/>
    <GoodsTenClock/>
    <GoodsTreasures/>
    <GoodsLook/>
    <GoodsWonderful/>
  </div>
</template>
<script>
  import GoodsHeader from '../../components/GoodsHeader/GoodsHeader.vue'
  import GoodsSwiper from '../../components/GoodsSwiper/GoodsSwiper.vue'
  import GoodsRecommendedScroll from '../../components/GoodsRecommendedScroll/GoodsRecommendedScroll.vue'
  import GoodsPick from '../../components/GoodsPick/GoodsPick.vue'
  import GoodsTenClock from '../../components/GoodsTenClock/GoodsTenClock.vue'
  import GoodsTreasures from '../../components/GoodsTreasures/GoodsTreasures.vue'
  import GoodsLook from '../../components/GoodsLook/GoodsLook.vue'
  import GoodsWonderful from '../../components/GoodsWonderful/GoodsWonderful.vue'
    export default {
    components:{
      GoodsHeader,
      GoodsSwiper,
      GoodsRecommendedScroll,
      GoodsPick,
      GoodsTenClock,
      GoodsTreasures,
      GoodsLook,
      GoodsWonderful
    }
    }

</script>
<style lang="less" rel="stylesheet/less">
.goods{
 background: #ededed;
  overflow: hidden;
}

</style>
