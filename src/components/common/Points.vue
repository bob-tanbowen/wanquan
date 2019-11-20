<template>
  <div class="container">
    <h2 >爱基金</h2>
    <p>风险提示</p>
    <p>风险提示
      活期保所对接的货币基金在投资运作过程中可能面临各种风险，包括市场风险、信用风险、流动性风险、管理风险、操作或技术风险和合规性风险等风险。投资者购买货币市场基金并不等于将资金作为存款存放在银行或者存款类金融机构，基金管理人不保证基金一定盈利，也不保证最低收益。快速取现的到账时间可能因银行系统、网络、通讯故障等管理人无法控制的原因而有一定延迟，具体到账时间以实际情况为准。
    </p>
    <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <div class="block">
            <h2>温馨提示</h2>
            <hr>
            <p style="text-align: left;">根据&lt;&lt;支付机构反洗钱和反恐怖融资管理办法&gt;&gt;的要求,您当前交易需要上传身份证影像以完善身份信息,完善后您可以正常进行正常理财申购哦!</p>
            <van-button style="width:75%" type="warning" @click="add">上传身份证</van-button>
          </div>
        </div>
      </van-overlay>
  </div>
</template>   
<script>
  import { Dialog } from 'vant'
  export default{
    components: {
      [Dialog.Component.name]: Dialog.Component
    },
    data(){
      return {
        show:false
      }
    },
    methods:{
      add(){
        Dialog.alert({
          title: '提示',
          message: '此功能正在完善中,请耐心等候!'
        }).then(() => {
          // on close
        });
      }
    },
    mounted(){
      setTimeout(()=>{this.show=true},1000)
    }
  }
</script>
<style>
  .container{
    margin-top:50px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  .block {
    width: 300px;
    height: 250px;
    background-color: #eee;
  }
</style>
    