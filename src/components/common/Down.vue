<template>
  <div>
    <van-nav-bar
      title="万全理财"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div>
      <van-image
        width="24rem"
        height="40rem"  
        :src="require('@/assets/glod1.jpg')"
      />
    </div>
  </div>
</template>  
<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.push('/HomePage');
      },
      onClickRight() {
        this.$router.push('/HomePage');
      }
    }
  }
</script> 