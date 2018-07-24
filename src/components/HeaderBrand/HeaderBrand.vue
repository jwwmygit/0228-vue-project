<template>
  <div class="BrandContainer">
    <header class="server">
      <a href="javascript:;">
        <span class="text">品牌制造商直供</span>

      </a>
      <a class="icon">
        <img src="./images/right.png" alt="">
      </a>
    </header>
    <header class="brand-shop-list">
      <ul class="list">
        <li class="container" v-for="(tag,index) in spliceTagList" :key="index">
          <div class="content">
            <h4>{{tag.name}}</h4>
            <h5>{{tag.floorPrice}}元起</h5>
          </div>
          <img :src="tag.picUrl" alt="">
        </li>
      </ul>
    </header>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['tagList']),
        spliceTagList(){
          const spliceTagList=this.tagList.splice(0,4)
          return spliceTagList
        }


      },
      methods:{

      },
      mounted(){
      this.$store.dispatch('getTagList')
       }
    }

</script>
<style lang="less" rel="stylesheet/less">
@import "../../common/less/mixins";
@import "../../common/less/clearfix";
  .BrandContainer{
    width: 100%;
    background: #fff;
    .server{
      height: 110/@rem;
      display: flex;
      align-items: center;
      justify-content: center;
      &>a{
        display: inline-block;
        .text{font-size: 32/@rem;
        }
      }
      .icon{
        display: inline-block;
        margin-left: 10/@rem;
        img{
          width: 32/@rem;
          height: 32/@rem;
          vertical-align: middle;
        }
      }
    }
    .brand-shop-list{
      width: 100%;
      .list{
        &:extend(.clear all);
        width: 100%;
        margin-top: 10/@rem;
        .container{
          float: left;
          width: 340/@rem;
          height: 236/@rem;
          margin:10/@rem 10/@rem ;
          background: #f4f4f4;
          position: relative;
          .content{
            padding: 20/@rem 30/@rem;
            width: 335/@rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow:hidden;
            &>h4{
              font-size: 28/@rem;
            }
            &>h5{
              font-size: 24/@rem;
              margin-top: 10/@rem;
            }
          }

          img{
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 6/@rem;
          }
        }

      }
    }
  }

</style>
