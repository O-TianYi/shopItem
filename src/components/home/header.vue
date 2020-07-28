<template>
  <div class="main">
    <img src="../../../static/image/my/my_head_pic.gif" alt />
    <div class="search">
        <!-- left-icon="" -->
      <van-search v-model="search" placeholder="Mac口红" shape="round" />
    </div>
    <div class="saomiao">
      <van-icon name="chat-o" badge="9" />
    </div>
    <div class="msg">
      <van-icon name="chat-o" badge="99+" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:''
    }
  },
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D1005C;
  img {
      height: 80px;
      width: 90px;
      border-radius: 50%;
  }
  .search {
      flex: 1;
      /deep/ .van-search{
          background-color: #D1005C;
      }
      /deep/ .van-cell{
          display: flex;
          align-items: center;
          height: 50px;
          font-size: 20px;
      }
      /deep/ .van-field__control{
          
          width: 100%;
      }
      /deep/ .van-icon-search{
          font-size: 30px;
          top: 5px;
      }
  }
  .saomiao,.msg{
      width: 90px;
      height: 60px;
      line-height: 60px;
      font-size: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      /deep/ .van-icon{
          cursor: pointer;
      }
  }
//   .saomiao {
//   }
//   .msg {
//   }
}
</style>