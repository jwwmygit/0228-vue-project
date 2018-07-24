<template>
  <div class="personal">
    <PersonalHeader />
    <div class="personalContent">
      <div class="wy">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login">
        <div class="phone" @click="$router.replace('/login')">
          <span class="icon"></span>
          <span class="txt" >手机号码登录</span>
        </div>
        <div class="mail">
          <span class="icon"></span>
          <span class="txt" >邮箱号码登录</span>
        </div>
        <div class="register">
          <span>手机号码注册</span>
          <span class="icon"></span>
        </div>
      </div>
      <div class="bottom">
        <div class="wx">
          <span class="icon"></span>
          <span class="txt">微信</span>
        </div>
        <div class="qq">
          <span class="icon"></span>
          <span class="txt">qq</span>
        </div>
        <div class="wb">
          <span class="icon"></span>
          <span class="txt">微博</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PersonalHeader from '../../components/GoodsHeader/GoodsHeader.vue'
    export default {
    components:{
      PersonalHeader
    }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../common/less/mixins";
  .personal{
    width: 100%;
    background: #f2f5f4;
    height: 1248/@rem;
    position: relative;
    .personalContent{
      width: 100%;
      padding-top: 88/@rem;
      .wy{
        width: 100%;
        height: 410/@rem;
        text-align: center;
        line-height: 410/@rem;
        img{
          width: 268/@rem;
          height: 90/@rem;
        }
      }
      .login{
        width: 100%;
        padding:0 40/@rem;
        box-sizing: border-box;
        .phone{
          width: 100%;
          height: 94/@rem;
          background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          .icon{
            display: inline-block;
            width: 40/@rem;
            height: 40/@rem;
            background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png");
            background-size: cover;
          }
          .txt{
            font-size: 32/@rem;
          }
        }
        .mail{
          width: 100%;
          height: 94/@rem;
          border: 1/@rem solid red;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40/@rem;
          .icon{
            display: inline-block;
            width: 40/@rem;
            height: 40/@rem;
            background-image: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png");
            background-size: cover;
          }
          .txt{
            font-size: 32/@rem;
          }
        }
        .register{
          width: 100%;
          text-align: center;
          font-size: 28/@rem;
          margin-top: 30/@rem;
          .icon{
            display: inline-block;
            width: 28/@rem;
            height: 28/@rem;
            background-image:url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png") ;
            background-size: cover;
            vertical-align: middle;
          }
        }
      }
      .bottom{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 40/@rem;
        .wx{
          width: 182/@rem;
          height: 40/@rem;
          box-sizing: border-box;
          padding: 0 40/@rem;
          border-right: 1/@rem solid #7e8c8d;
          display: flex;
          .icon{
            width: 40/@rem;
            height: 40/@rem;
            vertical-align: middle;
            background-size: cover;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…jfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=");
          }
          .txt{
            font-size: 26/@rem;
            line-height: 40/@rem;
          }
        }
        .qq{
          width: 182/@rem;
          height: 40/@rem;
          box-sizing: border-box;
          padding: 0 40/@rem;
          border-right: 1/@rem solid #7e8c8d;
          display: flex;
          .icon{
            width: 40/@rem;
            height: 40/@rem;
            vertical-align: middle;
            background-size: cover;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…jfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=");
          }
          .txt{
            font-size: 26/@rem;
            line-height: 40/@rem;
          }
        }
        .wb{
          width: 182/@rem;
          height: 40/@rem;
          box-sizing: border-box;
          padding: 0 40/@rem;
          display: flex;
          .icon{
            display: inline-block;
            width: 40/@rem;
            height: 40/@rem;
            vertical-align: middle;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…jfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=");
            background-repeat: no-repeat;
            background-size: 98%;
          }
          .txt{
            font-size: 26/@rem;
            line-height: 40/@rem;
          }
        }
      }
    }
  }
</style>
