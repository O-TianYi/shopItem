<template>
  <div class="main">
      <h5>
        <span>设置</span>
      </h5>
      <section class="info">
        <img src="../../../static/image/tabber_home.png" alt />
        <div class="right">
          <span>心态很重要</span>
          <span>邀请码：HXY0001 复制</span>
          <img src="../../../static/image/tabber_home_ac.png" alt />
        </div>
      </section>
      <section class="collection">
        <div class="shoucang" @click="shangpinClick">
          <span>126</span>收藏商品
        </div>
        <div class="shuxian"></div>
        <div class="shoucang">
          <span>126</span>收藏店铺
        </div>
        <div class="shuxian"></div>
        <div class="shoucang">
          <span>126</span>关注
        </div>
      </section>
      <section class="member">
          <img src="../../../static/image/tabber_home_ac.png" alt />
          升级超级会员预计每年可省<span>￥9685</span>
          <button>立即升级</button>
      </section>
  </div>
</template>

<script>
export default {
  methods:{
    shangpinClick(){
      this.$router.push('/shoucangshangpin');
    },

  }
};
</script>

<style lang="less" scoped>
.main {
  background-color: #d30060;
  width: 100%;
  border-radius: 0 0 50px 50px;
  color: #fdfdfd;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  font-size: 24px;
  h5 {
    display: flex;
    justify-content: right;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: start;
    height: 120px;
    img {
      border-radius: 50%;
      height: 100%;
    }
    .right {
      margin-top: 20px;
      margin-left: 20px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      span:nth-child(1) {
        width: 50%;
        font-size: 30px;
        font-weight: 400;
      }
      span:nth-child(2) {
        width: 60%;
        padding: 10px;
        line-height: 20px;
        background-color: #dc588f;
        color: #f8eef2;
        text-align: center;
        border-radius: 40px;
      }
      img {
        width: 100px;
        height: 30px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
  .collection {
    padding: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shuxian {
      border-left: 3px solid #e0739f;
      width: 0;
      height: 50px;
    }
    .shoucang {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      span {
        margin-bottom: 20px;
        font-size: 35px;
      }
    }
  }
  .member{
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      padding: 30px;
      width: 80%;
      line-height: 30px;
      height: 30px;
      bottom: -50px;
      background-color: #413831;
      border-radius: 20px;
      font-size: 24px;
      color: #FBEBCB;
      img{
          height: 50px;
          border-radius: 50%;
      }
      span{
          color: #E94553;
      }
      button{
          color: #E94553;
          background-color: #FBE7B2;
          border-radius: 20px;
          border: 0;
          line-height: 30px;
          height: 30px;
          font-size: 24px;
      }
  }
}
</style>