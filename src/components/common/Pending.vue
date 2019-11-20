<template>
  <div>
    <!-- 顶部导航 -->
    <van-nav-bar
      title="总资产(元)"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- top_cart -->
    <div class="top_cart">
        <div class="top_text">
          <h1>{{totalMoney}}</h1>
          <van-button class="cart_btn" plain type="primary" @click="hide">{{msg}}</van-button>
          <van-button icon="eye-o" type="default" class="top_button" @click="hide"/>
        </div>
        <div class="top_bottom">
          <div>
            <p>昨日收益(元)</p>
            <p>{{tomMoney}}</p>
          </div>
          <div class="top_middle"></div>
          <div>
            <p>累计收益(元)</p>
            <p>{{accMoney}}</p>
          </div>
        </div>
      </div>
      <!-- 中部循环卡片 -->
      <div>
        <p>资产</p>
        <hr>
        <div class="middle_card" v-for="(item,i) of textList">
          <div class="middle_left">
              <span>{{item.text1}}</span><br>
              <p>{{item.text2}}</p>
          </div>
          <div class="middle_right">
              <span>{{item.text3}}</span><br>
              <p>{{item.text4}}</p>
          </div>
        </div>
      </div>
      <!-- 底部权益栏 -->
      <table width="100%">
        <tr class="bottom_card" @click="jumpEquity" v-for="(eq,i) of eqList" :key="i">
          <td class="eq_text">{{eq.text}}</td>
          <td class="eq_text2">{{eq.text2}}</td>
          <td class="eq_text3">&gt;</td>
        </tr>
      </table>
  </div>
</template>   
<script>
export default {
  data(){
    return {
      totalMoney:"0.00",
      tomMoney:"0.00",
      accMoney:"0.00",
      msg:"隐藏资金",
      textList:[
        {text1:"活期宝",text2:"¥0.00",text3:"定期宝",text4:"¥0.00"},
        {text1:"基金",text2:"¥0.00",text3:"投资组合",text4:"¥0.00"},
        {text1:"黄金",text2:"¥0.00",text3:"银行+",text4:"¥0.00"},
      ],
      eqList:[
        {text:"我的权益",text2:"理财用户尊享"},
        {text:"借钱",text2:"大额低息"},
        {text:"理财券",text2:""},
        {text:"特权码",text2:"专属理财特权"},
        {text:"理财卡",text2:"0张"},
        {text:"资产报告",text2:""},
        {text:"回款设置",text2:"回款渠道由你定"},
        {text:"定投管理",text2:"设置定投收益无忧"},
        {text:"上传身份信息",text2:"早认证早收益"},
        {text:"风险测评",text2:""},
        {text:"邀请好友",text2:"一起来赚钱"},
        {text:"小目标",text2:"查看你的小目标"},
        {text:"天天基金绑卡",text2:""},
        {text:"授权管理",text2:""},
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/HomePage');
    },
    hide(){
      if(this.totalMoney!=="*.**"){
        this.totalMoney="*.**";
        this.tomMoney="*.**";
        this.accMoney="*.**";
        this.msg="显示资金"
      }else if(this.totalMoney=="*.**"){
        this.totalMoney="0.00";
        this.tomMoney="0.00";
        this.accMoney="0.00";
        this.msg="隐藏资金"
      } 
    },
    jumpEquity(){
      this.$router.push('/Down')
    }
  }
}
</script>
<style>
  /* bottom_card */
  .bottom_card{
    margin:10px auto;
  }
  .eq_text{height:40px;text-align: center;border-bottom:1px solid #aaa ;}
  .eq_text2{text-align:center;color:#ff6a00;border-bottom:1px solid #aaa ;}
  .eq_text3{border-bottom:1px solid #aaa;}
  /* middle_card */
  .middle_card{
    display: flex;
    justify-content: space-around;
  }
  .middle_left{
    width:50%;
    border:1px solid #ccc;
  }
  .middle_right{
    width:50%;
    border:1px solid #ccc;
  }
  /* 顶部导航 */
  .cart_btn{
    background-color: #ff6a00;
    color:#ccc !important;
    border:1px solid #fff;
    border-radius: 10%;
    height:30px;
    line-height: 30px;
  }
  .top_cart{
    background-color: #ff6a00;
    border-radius: 5px;
    width:93%;
    height:175px;
    margin:0 auto; 
  }
  .top_middle{
    width:2px;height:60px;
    border-left:1px solid #fff;
  }
  .top_button{
    background-color: #ff6a00;
    border:0px;
  }
  .top_bottom{
    display: flex;
    justify-content: space-around;
  }
  .top_bottom p{margin-top:0}
  .top_cart h1{margin:0}
</style>