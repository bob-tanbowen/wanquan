<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar fixed title="万全理财" left-text="返回" left-arrow>
      <van-icon name="question-o" slot="right" />
    </van-nav-bar>
    <!-- top_cart -->
    <div class="top_cart">
      <div class="top_text">
        <span>理财资产(元)</span>&nbsp;<van-button icon="eye-o" type="default" class="top_button" @click="hide"/>
        <h1>{{totalMoney}}</h1>
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
    <!-- 通知栏 -->
    <van-notice-bar
      :text="noticeMsg"
      left-icon="volume-o"
    />
    <!-- 卡片导航栏 -->
    <div>
      <van-row class="tab_container">
        <van-col span="6" v-for="(item,i) of tabList" :key="i" class="tab_icon">
          <van-button :icon="item.icon" size="large" type="default" @click="jumpTo"/>
          <p class="tab_msg">{{item.textMsg}}</p>
        </van-col>
      </van-row>
    </div>
    
    <!-- 轮播图 -->
    <div>
      <van-swipe style="width: 93%;margin:0 auto" :autoplay="3000" indicator-color="#ff6a00">
        <van-swipe-item v-for="(pic,i) of urlList" :key="i">
          <img :src="pic" alt="" style="width:100%">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 投资组合区 -->
    <div class="glod" v-for="(g,i) of glodList" :key="i">
      <p>{{g.topText}}</p>
      <p>{{g.middleText}}</p>
      <span>{{g.bottomText}}</span>
      <span class="glod_span">理财期限&nbsp;&nbsp;&nbsp;{{g.bottomDate}}</span><br>
      <span>{{g.bottomText2}}</span>
      <span>起投金额&nbsp;&nbsp;&nbsp;{{g.bottomText3}}</span>
      <hr>
    </div>
    <!-- 登录区 -->
    <br><br><br>
  </div>
</template> 
<script>
export default {
  data(){
    return {
      noticeMsg:"亲,国华节节高A款热卖中,过去一年回报率6%,欢迎查看体验哦!",
      totalMoney:"0.00",
      tomMoney:"0.00",
      accMoney:"0.00",
      tabList:[
        {icon:"aim",textMsg:"活期宝"},
        {icon:"paid",textMsg:"定期宝"},
        {icon:"points",textMsg:"基金"},
        {icon:"balance-pay",textMsg:"黄金"},
        {icon:"credit-pay",textMsg:"股票"},
        {icon:"pending-payment",textMsg:"特权码"},
        {icon:"chart-trending-o",textMsg:"券商理财"},
        {icon:"balance-o",textMsg:"AI万全"},
      ],
      urlList:[
        require("@/assets/banner1.jpg"),
        require("@/assets/banner2.jpg"),
        require("@/assets/banner3.jpg")
      ],
      glodList:[
        {topText:"活期保",middleText:"资金中转站",bottomText:"2.44%",bottomDate:"灵活存取",bottomText2:"七日年化收益率",bottomText3:"100.00元"},
        {topText:"组合理财",middleText:"AI万全",bottomText:"5.09%",bottomDate:"180天",bottomText2:"近一年年化收益率",bottomText3:"1000.00元"},
        {topText:"定期理财",middleText:"券商理财",bottomText:"4.25%",bottomDate:"95天",bottomText2:"预期年化收益率",bottomText3:"50000.00元"},
        {topText:"定期理财",middleText:"稳定盈利360天",bottomText:"4.023%",bottomDate:"360天",bottomText2:"七日年化收益率",bottomText3:"100.00元"},
      ]
    }
  },
  methods:{
    jumpTo(){
      this.$router.push('/Down')
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
    }
  },
  mounted(){

  }
}
</script>  
<style scoped>
  .glod .glod_span{
    margin-left:90px;
  }
  .glod{
    margin-top:10px;
    text-align: left;
  }
  .glod hr{
    width:90%;
  }
  .glod span{
    margin-left:20px;
  }
  .glod p{
    margin-bottom:0;
    margin-left:20px;
  }
  .top_cart{
    background-color: #ff6a00;
    border-radius: 5px;
    width:93%;
    height:175px;
    margin: 0 auto; 
    margin-top:50px;
  }
  .top_middle{
    width:2px;height:50px;
    border-left:1px solid #fff;
  }
  .top_cart p{margin-top:0}
  .top_cart h1{margin-top:0}
  .top_button{
    background-color: #ff6a00;
    border:0px;
  }
  .top_bottom{
    display: flex;
    justify-content: space-around;
  }
  .tab_container{
    width:93%;
    height:160px;
    margin-top:10px;
    text-align: center;
  }
  .tab_icon{
    /* width:90px;height:100px; */
  }
  .tab_msg{
    margin-top:0px
  }
</style>