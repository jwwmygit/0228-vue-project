<template>
  <div id="homeContainer">
    <HomeHeader name="top"/>
    <router-view/>
    <a class="top"  href="#top"></a>
  </div>
</template>
<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader.vue'


    export default {
    components:{
      HomeHeader,
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
