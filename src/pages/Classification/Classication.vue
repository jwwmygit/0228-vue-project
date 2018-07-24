<template>
  <div class="Classification1Wrap">
    <div class="Classification1WrapHeader">
      <div class="wrap-header">
        <span class="search">
        <img src="./images/search.png" alt="">
      </span>
        <span class="title">搜索商品, 共9723款好物</span>
      </div>
    </div>
    <ClassicationLeft />
    <ClassicationRight/>
  </div>
</template>
<script>
  import ClassicationRight from '../../components/Classification1Content/ClassicationRight.vue'
  import ClassicationLeft from '../../components/Classification1Content/ClassicationLeft.vue'
  import {mapState}from 'vuex'
    export default {
      mounted(){
        this.$store.dispatch('getCategoryData')
      },
      components:{
        ClassicationLeft,
        ClassicationRight
      },

    }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
.Classification1Wrap{
  width: 100%;
  background: #fff;
  .Classification1WrapHeader{
    width: 100%;
    height: 88/@rem;
    position: fixed;
    border: 1/@rem solid #7f7f7f;
    left: 0;
    top: 0;
    z-index: 100;
    .wrap-header{
      box-sizing: border-box;
      padding: 10/@rem 20/@rem;
      margin-top: 15/@rem;
      background: #ededed;
      width: 100%;
      height: 56/@rem;
      border-radius: 10/@rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .search{
        width: 28/@rem;
        height: 28/@rem;
        display: inline-block;
        margin-right: 10/@rem;
        margin-top: 3/@rem;
        img{
          width: 100%;
          vertical-align: top;
        }
      }
      .title{
        font-size: 28/@rem;
      }
    }


  }
}

</style>
