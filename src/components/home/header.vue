<template>
  <div class="app-container">
    <van-image round width="50px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <van-icon name="scan" />
    <van-icon name="chat-o" />
  </div>
</template>


<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>


<style lang="less" scoped>
@headerColor: red;
.app-container{
  background-color: @headerColor;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  padding: 20px;
}
</style>