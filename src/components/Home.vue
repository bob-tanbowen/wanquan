<template>
  <div>
  
    <!-- 底部导航栏 -->
<router-view />

<van-tabbar route>
  <van-tabbar-item
    replace
    to="/HomePage"
    icon="home-o"
  >
    首页
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/Glod"
    icon="refund-o"
  >
    理财
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/Down"
    icon="down"
  >
   下载
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/Points"
    icon="points"
  >
    基金
  </van-tabbar-item>
  <van-tabbar-item
    replace
    to="/Pending"
    icon="pending-payment"
  >
    资产
  </van-tabbar-item>
</van-tabbar>
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="wap-home" id="tab1">首页</van-tabbar-item>
      <van-tabbar-item name="gold" icon="gold-coin" id="tab2">理财</van-tabbar-item>
      <van-tabbar-item name="down" icon="down" id="tab3">下载</van-tabbar-item>
      <van-tabbar-item name="points" icon="points" id="tab4">基金</van-tabbar-item>
      <van-tabbar-item name="pending" icon="pending-payment" id="tab5">资产</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>