<template>
  <div class="Classification1Content">


  </div>
</template>
<script>
  import {mapState}from 'vuex'
    export default {
    data(){
      return{
        index:0,
        isShow:false
      }
    },
    computed:{
      ...mapState(['categoryData'])
    },
    methods:{
      cateList(index){
        console.log(index)
        this.index=index;
        this.isShow=true
        console.log(this.tcateList[index])
      }
    },
      mounted(){
        this.$store.dispatch('getCategoryData')
      }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
.Classification1Content{
  width: 100%;
  overflow: hidden;
  .right-wrap{
    width: 162/@rem;
    margin-top: 80/@rem;
    float: left;
    .list{
      .item{
        width: 162/@rem;
        height: 50/@rem;
        line-height: 50/@rem;
        text-align: center;
        margin:40/@rem 0;
        font-size: 28/@rem;

      }
    }
  }
  .left-wrap{
    width: 528/@rem;
    margin-top: 80/@rem;
    padding: 30/@rem 30/@rem 21/@rem 30/@rem;
    height: 400rem;
    float: right;
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
}

</style>
