<template>
  <div class="left-wrap">
    <div class="header" v-if="categoryData[index]">
      <img :src="categoryData[index].bannerUrl"  >
    </div>
    <div class="middle">
      <span class="line"></span>
      <span class="more">更多推荐</span>
      <span class="line"></span>
    </div>
    <div class="bottom">
      <ul class="list" v-if="categoryData[index]">
        <li class="item"  v-for="(cate,i) in categoryData[index].subCateList" >
          <img :src="cate.wapBannerUrl" alt="" class="img">
          <div class="name">{{cate.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState}from 'vuex'
  import PubSub from 'pubsub-js'
    export default {
      data(){
        return{
          index:0,
        }
      },
      computed:{
        ...mapState(['categoryData'])
      },
      mounted(){
        PubSub.subscribe('getData',(msg,index)=>{
          this.index=index
          console.log(this.index)
        })
      }
    }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .left-wrap{
    width: 528/@rem;
    margin-top: 80/@rem;
    margin-left: 3.4rem;
    padding: 30/@rem 30/@rem 21/@rem 30/@rem;
    .header{
      width: 100%;
      height: 192/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .middle{
      width: 100%;
      height: 108/@rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .line{
        display: inline-block;
        width: 60/@rem;
        height: 2/@rem;
        background: #7f7f7f;
      }
      .more{
        font-size: 24/@rem;
      }
    }
    .bottom{
      .list{
        display: flex;
        flex-wrap: wrap;
        .item{
          flex-shrink: 0;
          width: 144/@rem;
          height: 216/@rem;
          margin-right: 32/@rem;
          .img{
            width: 100%;
            height: 144/@rem;
            display: block;
          }
          .name{
            font-size: 24/@rem;
            width: 100%;
            height: 72/@rem;
            text-align: center;
          }
        }
      }
    }
  }

</style>
