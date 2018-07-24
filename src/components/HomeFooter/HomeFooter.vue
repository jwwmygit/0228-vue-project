<template>
  <div class="HomeFooter">
    <div class="HomeFooterWrap">
      <div class="button">
        <div>下载APP</div>
        <div>电脑版</div>
      </div>
      <p class="text">网易公司版权所有 © 1997-2018</p>
      <p class="text">食品经营许可证：JY13301080111719</p>
    </div>

  </div>
</template>
<script>
    export default {}

</script>
<style lang="less" rel="stylesheet/less">
  @import "../../common/less/mixins";
  .HomeFooter{
   width: 100%;
    height: 254/@rem;
    background: #414141;
    margin-bottom: 98/@rem;
    .HomeFooterWrap{
      border: 1/@rem solid transparent;
      padding: 50/@rem;
      .button{
        display: flex;
        justify-content: center;
        margin-bottom: 20/@rem;
        div{
          width: 172/@rem;
          height: 62/@rem;
          border-radius: 5/@rem;
          color: #fff;
          text-align: center;
          line-height: 62/@rem;
          font-size: 28/@rem;
          border: 1/@rem solid #fff;
          margin-right: 40/@rem;

        }
      }
      .text{
        color: #999;
        font-size: 22/@rem;
        width: 100%;
        line-height: 36/@rem;
        text-align: center;

      }

    }
  }

</style>
