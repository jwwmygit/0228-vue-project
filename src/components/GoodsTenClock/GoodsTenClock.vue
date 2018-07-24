<template>
  <div class="GoodsTenClock">
    <div class="GoodsTenClockHeader">
      十点一刻
    </div>
    <div class="GoodsTenClockContent">
          <div class="wrap" >
            <div class="list" v-for="(item,index) in tenfifteen">
              <div class="content">
                 <div class="topWrap">
                   <div class="topic">--今日话题--</div>
                   <div class="about">{{item.title}}</div>
                   <div class="chat">{{item.desc}}</div>
                 </div>
                <div class="bottom">
                  <span class="icon" v-if="item.participantAvatar" v-for="(icon,index) in item.participantAvatar">
                    <img :src="icon" alt="">
                  </span>
                  <span class="dot">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span class="txt">{{item.participantNum}}人参与话题</span>
                </div>
              </div>
            </div>
            <div class="list" >
              <div class="content">
                <div class="more">
                  查看更多话题
                  <img class="right" src="./images/right.png" alt="" >
                </div>

              </div>
            </div>
          </div>
    </div>
  </div>
</template>
<script>
  import BScoll from 'better-scroll'
  import {mapState} from 'vuex'
    export default {
    computed:{
      ...mapState(['tenfifteen'])
    },
      mounted(){
        this.$store.dispatch('getTenfifteen',()=>{
          this.$nextTick(function () {
            new BScoll('.GoodsTenClockContent',{
              probeType: 2,  // 因为惯性滑动不会触发
              click: true,   //默认是禁止点击的
              scrollX: true,
              scrollY:false
            })
          })
        })
      }

    }

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
.GoodsTenClock{
  width: 100%;
  background: #fff;
  padding:0 20/@rem;
  .GoodsTenClockHeader{
    width: 100%;
    height: 120/@rem;
    line-height: 120/@rem;
    font-size: 32/@rem;
    text-align: center;
    padding-right: 24/@rem;
    box-sizing: border-box;

  }
  .GoodsTenClockContent{
    width: 100%;
    display: flex;
    .wrap{
      display: flex;
     .list{
       flex-shrink: 0;
       width: 580/@rem;
       height: 411/@rem;
       padding: 38/@rem 40/@rem;
       margin-right:30/@rem ;
       background-image: url("./images/bg.png");
       background-size: cover;
       position: relative;
       .content{
         width: 500/@rem;
         height: 300/@rem;
         position: absolute;
         box-sizing: border-box;
         padding: 20/@rem;
         left: 50%;
         top:40%;
         transform: translate(-50%,-50%);
         .more{
           width: 100%;
           height: 100%;
           padding-left: 50/@rem;
           box-sizing: border-box;
           text-align: center;
           font-size: 30/@rem;
           line-height: 300/@rem;
           img{
             vertical-align: middle;
             width: 30/@rem;
             height: 30/@rem;
           }
         }

         .topWrap{
           height: 200/@rem;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 100/@rem;
           .topic{
             font-size: 24/@rem;
             color: #7f7f7f;
           }
           .about{
             font-size: 32/@rem;
           }
           .chat{
             font-size: 28/@rem;
             color: #7f7f7f;
           }
         }
         .bottom{
           display: flex;
           .icon{
             display: inline-block;
             width: 48/@rem;
             height: 48/@rem;
             border-radius: 50%;
             vertical-align: middle;
             overflow: hidden;

             img{
               width: 100%;
               height: 100%;

             }
           }
           .txt{
             font-size: 24/@rem;
             display: inline-block;
             margin-left: 60/@rem;
             margin-top: 14/@rem;
           }
           .dot{
             display: flex;
             width: 48/@rem;
             height: 48/@rem;
             border-radius: 50%;
             background: #d9d9d9;
             justify-content: space-around;
             align-items: center;
             span{
               width: 6/@rem;
               height: 6/@rem;
               background: #fff;
               display: inline-block;

             }
           }
         }
        }
     }
    }

  }
}

</style>
