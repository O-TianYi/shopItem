<template>
  <div class="main">
    <img src="../../../static/image/home/home_main_ac1.png" alt />

    <van-grid :column-num="5" class="list">
      <van-grid-item v-for="item in list" :key="item.id">
        <img :src="item.url" alt />
        <span>{{item.name}}</span>
      </van-grid-item>
    </van-grid>

    <van-grid :column-num="5" class="other">
      <van-grid-item v-for="item in other" :key="item.id">
        <img :src="item.url" alt />
        <span>{{item.name}}</span>
      </van-grid-item>
    </van-grid>

    <img src="../../../static/image/home/home_main_ac2.png" alt />
  </div>
</template>

<script>
export default {
  props: ["list", "other"],
};
</script>

<style lang="less" scoped>
.main {
  margin-top: 50px;
  img {
    width: 100%;
    margin-bottom: 10px;
    &::nth-child(1) {
      height: 30px;
    }
    &:nth-child(2) {
      height: 100px;
    }
  }
  .list,
  .other {
    margin-bottom: 10px;
    /deep/ [class*="van-hairline"]::after {
      border: 0;
    }
    /deep/ .van-grid-item__content{
      background-color: #FBFBFB;
    }
    img {
      // border-radius: 50%;
      margin-bottom: 10px;
      cursor: pointer;
    }
    span {
      font-size: 24px;
      font-weight: 600;
    }
  }
  .list {
    img {
      width: 100px;
      height: 100px;
    }
  }
  .other {
    background-color: #f8f8f8;
    img {
      width: 90px;
      height: 80px;
    }
  }
}
</style>