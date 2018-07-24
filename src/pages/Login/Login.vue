<!--<template>
  <div class="Login">
    <LoginHeader/>
    <div class="LoginContent">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="input">
        <div class="u-input">
          <input type="number" placeholder="请输入手机号"/>
          <span class="error" ></span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import LoginHeader from '../../components/GoodsHeader/GoodsHeader.vue'
    export default {
    components:{
      LoginHeader
    }
    }

</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import "../../common/less/mixins";
  .Login{
    width: 100%;
    .LoginContent{
      width: 100%;
      .logo{
        width: 100%;
        margin-top: 150/@rem;
        text-align: center;
        img{
          width: 192/@rem;
          height: 64/@rem;
        }
      }
      .input{
        padding-top: 40/@rem;
        .u-input{
          width: 100%;
          height: 90/@rem;
          box-sizing: border-box;
          padding-left: 30/@rem;
          font-size: 30/@rem;
          line-height: 90/@rem;
          input{
            height: 42/@rem;
            outline: none;
          }
          .error{
            width: 62/@rem;
            height: 62/@rem;
            display: inline-block;
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR…WkKKJ89QwYcg0xEO2/lokCijfKAsrely+EVSj6pyz1/wFrT2LaPTPA3AAAAABJRU5ErkJggg==") no-repeat 50% 50%;
          }
        }
      }

    }
  }


</style>-->
<template>
  <div>
    <div class="login-wrap">
      <GoodsHeader/>
      <div class="content-wrap">
        <div class="logo-wrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="center-wrap">
          <div class="top">
            <div class="phone">
              <input type="text" class="tel-input" placeholder="请输入手机号" maxlength="11" v-model="phone">
              <div class="error" v-if="phone.length" @click="clear"></div>
            </div>
            <div class="yanzheng">
              <input type="text" class="yan-input" placeholder="请输入手机验证码">
              <div class="btns" @click="verify" ref="yz">获取验证码</div>
            </div>
            <div class="alert-text">
              <div class="text" ref="warn">

              </div>
            </div>
            <div class="unlogin">
              <span class="issue">遇到问题?</span>
              <span class="pwd-login">使用密码验证登录</span>
            </div>
            <div class="sub-wrap">
              <div class="submit">登录</div>
              <div class="other">其他登录方式</div>
              <div class="more">注册账号
                <span class="icon"></span>
              </div>
            </div>
          </div>
          <div class="down"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import GoodsHeader from '../../components/GoodsHeader/GoodsHeader.vue'
  let i=0;
  export default {  //配置对象
    data(){
      return {
        phone:'',
        isRight:true
      }
    },

    methods:{
      verify(){
        let timer=null;
        let isTimerId=null
        this.isRight=/^1\d{10}$/.test(this.phone)
        this.$refs.warn.textContent=this.phone ? (this.isRight ? "":"手机号格式错误"):("请输入手机号")
        if(this.isRight){
        if(i===0){
          i=30
          timer=setInterval(()=>{
            i--;
            this.$refs.yz.textContent="倒计时"+i+"s";
            if(i<=0){
              clearInterval(timer)
              this.$refs.yz.textContent="获取验证码";
            }
          },1000)
        }

        }
      },
      clear(){
        this.phone=""
      }
    },

    components:{
      GoodsHeader
    }
  }
</script>
<style lang='less'>

  @import '../../common/less/mixins';
  .content-wrap{
    padding-top: 88/@rem;
    background-color: #fff;
    .logo-wrap{
      height:64/@rem;
      text-align: center;
      padding-top: 56/@rem;
      img{
        width:192/@rem;
        height:64/@rem;
        display: inline-block;
      }
    }
    .center-wrap{
      width:670/@rem;
      padding:0 40/@rem;
      .top{
        padding-top: 80/@rem;
        .phone{
          margin: auto;
          width:670/@rem;
          padding-left: 8/@rem;
          font-size: 30/@rem;
          color: #666;
          position: relative;
          overflow: hidden;
          .error{
            width: 62/@rem;
            height: 62/@rem;
            position: absolute;
            right: 0;
            bottom: 0;
            background-image: url("./images/error.png");
            background-repeat: no-repeat;
            background-size: 50% 50%;
          }
          input{
            outline: none;
            width:100%;
            height:90/@rem;
            border-bottom: 1/@rem solid #ddd;
          }
        }
        .yanzheng{
          margin: auto;
          width:670/@rem;
          padding-left: 8/@rem;
          font-size: 30/@rem;
          color: #666;
          position: relative;
          overflow: hidden;
          border-bottom: 1/@rem solid #ddd;

          input{
            outline: none;
            width:380/@rem;
            height:90/@rem;
          }
          .btns{
            position: absolute;
            display: inline-block;
            right:10/@rem;
            top:25/@rem;
            width:166/@rem;
            height:52/@rem;
            border:2/@rem solid #666;
            line-height: 56/@rem;
            font-size: 26/@rem;
            border-radius: 10/@rem;
            text-align: center;
          }
        }
        .alert-text{
          margin-top: 16/@rem;
          font-size: 26/@rem;
          color: #b4282d;
          .text-err{
            display: block;
          }
        }
        .unlogin{
          overflow: hidden;
          font-size: 28/@rem;
          margin:50/@rem 0  40/@rem 0;
          .issue{
            float: left;
            color: #666;
          }
          .pwd-login{
            float: right;
            color: #333;
          }
        }
        .sub-wrap{
          width:670/@rem;
          /*<!--height:164/@rem;-->*/
          /*<!--padding: 0 40/@rem;-->*/
          font-size: 30/@rem;
          .submit{
            width:670/@rem;
            height:94/@rem;
            line-height: 94/@rem;
            text-align: center;
            background-color: #b4282d;
            border:2/@rem solid #fff ;
            color: white;
            border-radius: 10/@rem;
            margin-bottom: 50/@rem;
          }
          .other{
            width:670/@rem;
            height:94/@rem;
            text-align: center;
            line-height: 94/@rem;
            background-color: #fff;
            border-radius: 10/@rem;
            /*<!--border: 1/@rem solid #b4282d;-->*/
            border: 2/@rem solid #b4282d;
            color: #b4282d;
          }
          .more{
            margin-top: 40/@rem;
            color: #333;
            text-align: center;
            .icon{
              display: inline-block;
              background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
              width:27/@rem;
              height:27/@rem;
              background-size:100%;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
</style>

