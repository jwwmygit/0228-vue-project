<template>
  <div class="GoodsLook">
    <div class="GoodsLookHeader">严选Look</div>
    <div class="GoodsLookCotent">
      <div class="content">
        <img :src="yxLook.picUrl" alt="">
      </div>
      <div class="text">
        <div class="title">
          <span class="icon">
            <img :src="yxLook.avatar" alt="">
          </span>
          <span class="name">{{yxLook.nickname}}</span>
        </div>
        <span class="select">{{yxLook.content}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['yxLook'])
      },
      mounted(){
        this.$store.dispatch('getYxLook')
      }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
.GoodsLook{
  margin-top: 10/@rem;
  /*padding: 0 20/@rem;*/
  background: #fff;
  .GoodsLookHeader{
    height: 120/@rem;
    text-align: center;
    line-height: 120/@rem;
    font-size: 30/@rem;


  }
  .GoodsLookCotent{
    .content{
      width: 100%;
      height: 422/@rem;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .text{
      padding: 20/@rem;
      box-sizing: border-box;
      .title{
        display: flex;
        align-items: center;
        .icon{
          margin-right: 15/@rem;
          width: 48/@rem;
          height: 48/@rem;
          display: inline-block;
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            vertical-align: middle;
          }
        }
        .name{
          font-size: 32/@rem;
          line-height: 32/@rem;
        }
      }
      .select{
        font-size: 28/@rem;
        color: #7f7f7f;

      }

    }
  }
}

</style>
