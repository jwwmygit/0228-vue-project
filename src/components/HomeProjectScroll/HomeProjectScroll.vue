<template>
  <header class="HomeProjectScroll">
    <div class="select">
      <span class="txt">专题精选</span>
      <span class="icon"><img src="./images/right.png" alt=""></span>
    </div>
    <div class="pineapple">
      <div class="list-wrap">
        <div class="list" v-for="(topic,index) in topicList" :key="index">
          <div class="img">
            <img :src="topic.itemPicUrl" alt="">
          </div>
          <div class="txt-top">
            <span class="qing">{{topic.title}}</span><span class="price">{{topic.priceInfo}}元起</span>
          </div>
          <span class="txt-bottom">{{topic.subtitle}}</span>
        </div>

      </div>

    </div>
  </header>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapState}from 'vuex'
    export default {
    computed:{
      ...mapState(['topicList'])
    },
    mounted(){
      this.$store.dispatch('getTopicList')
      this.$nextTick(()=>{
        new BScroll('.pineapple',{
          probeType: 2,  // 因为惯性滑动不会触发
          click: true,   //默认是禁止点击的
          scrollX: true,
          scrollY:false
        })
      })
    }
    }

</script>
<style scoped lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
.HomeProjectScroll{
  margin-top: 20/@rem;
  background: #fff;
  .select{
    width: 100%;
    height: 110/@rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .txt{
      font-size: 32/@rem;
    }
    .icon{
      display: inline-block;
      width: 30/@rem;
      height: 30/@rem;
      text-align: center;
      line-height: 30/@rem;
      margin-left: 12/@rem;
      img{
        width: 100%;
      }
    }
  }
  .pineapple{
   display: flex;
    height: 417/@rem;
    .list-wrap{
      padding: 0 0 20/@rem 20/@rem;
      height: 417/@rem;
      display: flex;
      .list{
        flex-shrink: 0;
        width: 575/@rem;
        margin-left: 10/@rem;
        .img{
          width: 575/@rem;
          height: 322/@rem;
          border-radius: 10/@rem;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .txt-top{
          display: flex;
          font-size: 28/@rem;
          justify-content: space-between;
          margin-top: 10/@rem;
          .price{
            color: red;
          }
        }
        .txt-bottom{
          font-size: 24/@rem;
          color: #7F7F7F;
        }
      }
    }
  }
}

</style>
