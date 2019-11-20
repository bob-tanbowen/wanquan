<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar
      title="理财"
      left-text="返回"
      right-text="?"
      left-arrow
      @click-left="onClickLeft"
      fixed
    />
    <!-- 切换面板 -->
    <van-tabs title-active-color="#ff6a00"  v-model="active" type="card" class="top_card" >
      <van-tab title="定期">
        <!-- 定期面板的顶部导航栏 -->
        <div class="top_nav">
          <span>稳盈360天</span><br>
          <van-tag type="warning">千元起购</van-tag>
          <van-tag type="warning">不限额</van-tag><br>
          <span style="font-size:40px ;">+4.02%</span><br>
          <span>七日年化收益率 &nbsp;&nbsp;&nbsp;&nbsp;理财期限</span>
          <span>360天</span><br>
          <van-button type="warning" class="nav_btn">开始赚钱</van-button>   
        </div>
        <!-- 中部导航 -->
        <van-grid :border="false" :column-num="4" style="width:93%;margin:0 auto;">
          <van-grid-item v-for="(item,i) of iconList" :key="i" style="padding:20px auto">
              <van-button :icon="item.icon" size="large" type="default" @click="jumpTo"/>
              <span>{{item.msg}}</span>
          </van-grid-item>
        </van-grid>
        <!-- footer导航 -->
        <div style="text-align: left">
          <div>
            <p style="margin-left:20px">万全心意</p>
            <hr>
          </div>
          <div style="margin-left:20px" v-for="(msg,i) of msgList">
            <p>{{msg.msg1}} | {{msg.msg2}}</p>
            <div style="display:flex">
              <div class="middleText">
                <p>{{msg.msg3}}</p>
                <span>{{msg.msg4}}</span>
              </div>
              <div style="margin-left:20px">
                <span style="font-size: 30px;">{{msg.msg5}}</span>
                <span>{{msg.msg6}}</span><br>
                <van-tag type="warning">{{msg.msg7}}</van-tag>
                <van-tag type="warning">{{msg.msg8}}</van-tag>
              </div>
            </div>
            <hr>
          </div>
        </div>
        <br><br><br>
      </van-tab>
      <van-tab title="基金">
          <div class="top_nav">
              <span>稳盈360天</span><br>
              <van-tag type="warning">千元起购</van-tag>
              <van-tag type="warning">不限额</van-tag><br>
              <span style="font-size:40px ;">+5.11%</span><br>
              <span>七日年化收益率 &nbsp;&nbsp;&nbsp;&nbsp;理财期限</span>
              <span>360天</span><br>
              <van-button type="warning" class="nav_btn">开始赚钱</van-button>   
            </div>
            <!-- 中部导航 -->
            <van-grid :border="false" :column-num="4" style="width:93%;margin:0 auto;">
              <van-grid-item v-for="(item,i) of iconList" :key="i" style="padding:20px auto">
                  <van-button :icon="item.icon" size="large" type="default" @click="jumpTo"/>
                  <span>{{item.msg}}</span>
              </van-grid-item>
            </van-grid>
            <!-- footer导航 -->
            <div style="text-align: left">
              <div>
                <p style="margin-left:20px">万全心意</p>
                <hr>
              </div>
              <div style="margin-left:20px" v-for="(msg,i) of msgList">
                <p>{{msg.msg1}} | {{msg.msg2}}</p>
                <div style="display:flex">
                  <div class="middleText">
                    <p>{{msg.msg3}}</p>
                    <span>{{msg.msg4}}</span>
                  </div>
                  <div style="margin-left:20px">
                    <span style="font-size: 30px;">{{msg.msg5}}</span>
                    <span>{{msg.msg6}}</span><br>
                    <van-tag type="warning">{{msg.msg7}}</van-tag>
                    <van-tag type="warning">{{msg.msg8}}</van-tag>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <br><br><br>
      </van-tab>
      <van-tab title="股票">
          <div class="top_nav">
              <span>稳盈360天</span><br>
              <van-tag type="warning">千元起购</van-tag>
              <van-tag type="warning">不限额</van-tag><br>
              <span style="font-size:40px ;">+4.33%</span><br>
              <span>七日年化收益率 &nbsp;&nbsp;&nbsp;&nbsp;理财期限</span>
              <span>360天</span><br>
              <van-button type="warning" class="nav_btn">开始赚钱</van-button>   
            </div>
            <!-- 中部导航 -->
            <van-grid :border="false" :column-num="4" style="width:93%;margin:0 auto;">
              <van-grid-item v-for="(item,i) of iconList" :key="i" style="padding:20px auto">
                  <van-button :icon="item.icon" size="large" type="default" @click="jumpTo"/>
                  <span>{{item.msg}}</span>
              </van-grid-item>
            </van-grid>
            <!-- footer导航 -->
            <div style="text-align: left">
              <div>
                <p style="margin-left:20px">万全心意</p>
                <hr>
              </div>
              <div style="margin-left:20px" v-for="(msg,i) of msgList">
                <p>{{msg.msg1}} | {{msg.msg2}}</p>
                <div style="display:flex">
                  <div class="middleText">
                    <p>{{msg.msg3}}</p>
                    <span>{{msg.msg4}}</span>
                  </div>
                  <div style="margin-left:20px">
                    <span style="font-size: 30px;">{{msg.msg5}}</span>
                    <span>{{msg.msg6}}</span><br>
                    <van-tag type="warning">{{msg.msg7}}</van-tag>
                    <van-tag type="warning">{{msg.msg8}}</van-tag>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <br><br><br>
      </van-tab>
      <van-tab title="黄金">
          <div class="top_nav">
              <span>稳盈360天</span><br>
              <van-tag type="warning">千元起购</van-tag>
              <van-tag type="warning">不限额</van-tag><br>
              <span style="font-size:40px ;">+6.00%</span><br>
              <span>七日年化收益率 &nbsp;&nbsp;&nbsp;&nbsp;理财期限</span>
              <span>360天</span><br>
              <van-button type="warning" class="nav_btn">开始赚钱</van-button>   
            </div>
            <!-- 中部导航 -->
            <van-grid :border="false" :column-num="4" style="width:93%;margin:0 auto;">
              <van-grid-item v-for="(item,i) of iconList" :key="i" style="padding:20px auto">
                  <van-button :icon="item.icon" size="large" type="default" @click="jumpTo"/>
                  <span>{{item.msg}}</span>
              </van-grid-item>
            </van-grid>
            <!-- footer导航 -->
            <div style="text-align: left">
              <div>
                <p style="margin-left:20px">万全心意</p>
                <hr>
              </div>
              <div style="margin-left:20px" v-for="(msg,i) of msgList">
                <p>{{msg.msg1}} | {{msg.msg2}}</p>
                <div style="display:flex">
                  <div class="middleText">
                    <p>{{msg.msg3}}</p>
                    <span>{{msg.msg4}}</span>
                  </div>
                  <div style="margin-left:20px">
                    <span style="font-size: 30px;">{{msg.msg5}}</span>
                    <span>{{msg.msg6}}</span><br>
                    <van-tag type="warning">{{msg.msg7}}</van-tag>
                    <van-tag type="warning">{{msg.msg8}}</van-tag>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <br><br><br>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        iconList:[
          {icon:"invition",msg:"银行圈"},
          {icon:"gem",msg:"券商理财"},
          {icon:"gift",msg:"国华人寿"},
          {icon:"point-gift",msg:"银行圈"},
          {icon:"coupon",msg:"众邦银行"},
          {icon:"comment",msg:"天府银行"},
          {icon:"gem",msg:"平安银行"},
          {icon:"send-gift",msg:"上海银行"},
        ],
        msgList:[
          {msg1:"国华人寿",msg2:"节节高A款",msg3:"6.00%",msg4:"历史年化投资回报率",msg5:"5年",msg6:"最长期限",msg7:"灵活支取",msg8:"按月付息"},
          {msg1:"快现存",msg2:"智能+B款",msg3:"5.00%",msg4:"最高利率",msg5:"5年",msg6:"最长期限",msg7:"灵活支取",msg8:"按月付息"},
          {msg1:"稳盈360天",msg2:"",msg3:"4.02%",msg4:"七日年化收益率",msg5:"360天",msg6:"理财期限",msg7:"千元起购",msg8:"不限额"},
          {msg1:"稳盈30天",msg2:"",msg3:"3.59%",msg4:"七日年化收益率",msg5:"30天",msg6:"投资期限",msg7:"千元起购",msg8:"30天滚动"},
          {msg1:"众邦宝",msg2:"",msg3:"3.85%",msg4:"年化率",msg5:"随存随取",msg6:"",msg7:"千元起购",msg8:"30天滚动"},
          {msg1:"现金宝",msg2:"",msg3:"3.27%",msg4:"年化收益率",msg5:"灵活存取",msg6:"",msg7:"千元起购",msg8:"30天滚动"},
        ]
      };
    },
    methods:{
      jumpTo(){
        this.$router.push('/Down')
      },
      onClickLeft() {
      this.$router.push('/HomePage')
    },
    }
  }
</script>
<style scoped>
  hr{
   width: 93%;
  }
  .middleText{
    width:200px;
    border-right: 2px solid #ccc;
  }
  .middleText p{font-size:30px;margin: 0;}
  .van-grid-item__content--center {
    padding:30px 0;
  }
  .top_card{
    margin-top:50px; 
  }
  .top_nav{
    margin-top:20px;
  }
  .nav_btn{width:75%;}
</style>