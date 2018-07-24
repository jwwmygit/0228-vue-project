<template>
  <div class="cate-nav">
    <div class="right-wrap">
      <ul class="list">
        <li class="item" v-for="(item,index) in categoryData"
            :key="index"
            @click="cateList(index)"
            :class="{active:showActive(index)}"
        >
          <a href="#" >{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState}from 'vuex'
  import BScroll from 'better-scroll'
  import PubSub from 'pubsub-js'
  export default {
    data(){
      return{
        index:0
      }
    },
    mounted(){
      this.$nextTick(() => {
        new BScroll('.right-wrap', {
          probeType: 2,  // 因为惯性滑动不会触发
          click: true,   //默认是禁止点击的
        })
      })
    },
    computed:{
      ...mapState(['categoryData'])

    },
    methods:{
      cateList(index){
        PubSub.publish('getData',index)
        this.index=index
      },
      showActive(index){
        return index===this.index
      }
    },

  }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .cate-nav{
    width: 162/@rem;
    margin-top: 80/@rem;
    position: fixed;
    top:0;
    bottom: 0;
    z-index: 4;
    background: #fff;
    .right-wrap{
      position: absolute;
      width: 100%;
      height: 95%;
      .list{
        position: relative;
        padding: 0.5rem 0 1.84rem;
        .item{
          width: 162/@rem;
          height: 50/@rem;
          line-height: 50/@rem;
          text-align: center;
          margin:40/@rem 0;
          font-size: 28/@rem;
          &.active{
            border-left: 1px solid firebrick;
            a{
              color: firebrick;
            }
          }

        }
      }
    }
  }

</style>
