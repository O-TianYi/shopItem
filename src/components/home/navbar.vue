<template>
  <div class="main">
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab :title="item.name" v-for="item in data" :key="item.id"></van-tab>
      </van-tabs>
      <div class="classify">
        <van-icon name="apps-o" />分类
      </div>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(acURL,index) in urls" :key="index">
        <!-- {{index}} -->
        <img :src="acURL" alt height="100%" width="100%"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      active: 0,
      urls: [
        "../../../static/image/home/home_ac1.gif",
        "../../../static/image/home/home_ac1.gif",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #cc0057;
  height: 200px;
  border-radius: 0 0 50px 50px;
  .tab {
    display: flex;
    justify-content: space-between;
    background-color: #cc0057;
    /deep/ .van-tabs__wrap {
      width: 100%;
    }
    /deep/ .van-tabs {
      flex: 1;
      display: flex;
      justify-content: space-between;
      border: 0;
    }
    /deep/ .van-tab {
      flex: 1;
      background-color: #cc0057;
      color: #fff;
      font-size: 20px;
    }
    /deep/ .van-tabs__line {
      background-color: #fff;
    }
    /deep/ [class*="van-hairline"]::after {
      border: 0;
    }
    .classify {
      width: 80px;
      height: 40px;
      border-radius: 20px 0 0 20px;
      background-color: #ef5394;
      position: relative;
      right: -20px;
      bottom: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      /deep/ .van-icon {
        font-size: 22px;
        top: 2px;
      }
    }
  }
  .my-swipe {
    position: relative;
    top: 20px;
    left: 7.5vw;
    width: 80vw;
    height: 20vw;
    box-shadow: 10px 10px 10px #D8B0AA;
  }
}
</style>