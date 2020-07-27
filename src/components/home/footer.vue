<template>
  <div class="app-container">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">直播</van-tabbar-item>
      <van-tabbar-item icon="search">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
export default {
  name: "Footer",
  data() {
    return {
        active: 0,
    };
  },
};
</script>


<style>
</style>

<style lang="less" scoped>
</style>