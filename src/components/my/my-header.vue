<template>
  <div class="main">
    <h5>
      <span>设置</span>
    </h5>
    <section class="info">
      <img src="../../../static/image/my/my_head_pic.gif" alt class="head-pic" />
      <div class="right">
        <span>心态很重要</span>
        <span>邀请码：HXY0001 复制</span>
        <img src="../../../static/image/my/my_plus.gif" class="plus" alt />
      </div>
    </section>
    <section class="collection">
      <div class="shoucang" @click="shangpinClick(item)" v-for="item in data" :key="item.id">
        <div class="content">
          <span>{{item.number}}</span>
          {{item.name}}
        </div>
      </div>
    </section>
    <section class="member">
      <img src="../../../static/image/my/my_member_icon.gif" alt />
      升级超级会员预计每年可省
      <span>￥9685</span>
      <div class="btn">立即升级</div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    shangpinClick(item) {
      this.$router.push({ name: item.routerURL, params: { title: item.name } });
    },
  },
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
    .head-pic {
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
        width: 120px;
        height: 40px;
        position: absolute;
        border-radius: 20px 0 0 20px;
        right: -30px;
        bottom: 0;
      }
    }
  }
  .collection {
    padding: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shoucang {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #e0739f;
      &:last-child {
        border: 0;
      }
      .content {
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
  }
  .member {
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
    color: #fbebcb;
    img {
      height: 50px;
      border-radius: 50%;
    }
    span {
      color: #e94553;
    }
    .btn {
      color: #e94553;
      background-color: #fbe7b2;
      border-radius: 20px;
      border: 0;
      line-height: 30px;
      height: 30px;
      font-size: 24px;
      padding: 5px;
    }
  }
}
</style>