<template>
  <div class="main">
    <div class="search">
      <van-search v-model="search" placeholder="请输入搜索关键词" />
    </div>
    <div class="babel">
      <van-tabs>
        <van-tab v-for="item in data" :title="item.name" :key="item.id">
          <span class="number" v-if="item.id===1">{{data.length}}</span>
        </van-tab>
      </van-tabs>
    </div>
    <div class="lunbo">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {
      search:'',
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  background-color: #CB1558;
  height: 300px;
  border-radius: 0 0 50px 50px;
  .search{
    /deep/ .van-search{
       background-color: #CB1558;
      
    }
  }
  .babel{
    /deep/ .van-tab{
      background-color: #CB1558;
       color: #E69AD8;
    }
    /deep/ .van-tab--active{
      color: #fff;
    }
    /deep/ .van-tabs__line{
      background-color: #fff;
    }
    /deep/ [class*="van-hairline"]::after{
      border: 0;
    }
    .number{
      display: block;
      background-color: #fff;
      width: 40px;
      height: 30px;
      border-radius: 10px 10px 10px 0;
      text-align: center;
      position:absolute;
      top: 0;
      left: 16vw;
      font-size: 28px;
    }
  }
  .lunbo{
    width: 80%;
    position: relative;
    bottom: -20px;
    left: 10%;
    /deep/ .van-swipe-item{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
       width: 100%;
       height: 200px;
    }
  }
}
</style>