<template>
  <div class="main">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="card">
          <div class="title">
            <van-checkbox v-model="checked">Nike耐克官方旗舰店</van-checkbox>
          </div>
          <div class="item">
            <div class="left">
              <van-checkbox v-model="checked"></van-checkbox>
              <img src="../../../static/image/home/home_list_9.png" alt />
            </div>
            <div class="right">
              <span class="desc">Nike/耐克女鞋2020夏季新款厚底增高透气运动休闲鞋CJ1649-001</span>
              <span class="mashu">
                <van-dropdown-menu>
                  <van-dropdown-item
                    v-model="value"
                    :title="'码数'+value"
                    :options="option"
                  >{{option.value}}</van-dropdown-item>
                </van-dropdown-menu>
              </span>
              <span>
                <van-tag plain type="success">标签</van-tag>
              </span>
              <span>￥699</span>
              <div class="number">
                <div class="youhui">
                  <van-tag plain type="success">返</van-tag>
                  <van-tag plain type="success">返</van-tag>
                  <van-tag plain type="success">返</van-tag>
                </div>
                <van-stepper v-model="number" />
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,

      checked: true,

      value: 0,
      option: [
        { text: "33码", value: 33 },
        { text: "34码", value: 34 },
        { text: "35码", value: 35 },
      ],

      number: "",
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>



<style lang="less" scoped>
.main {
  padding: 30px;
  background-color: #fbfbfb;
  /deep/ .van-cell {
    border-radius: 30px;
    height: 300px;
    margin-bottom: 20px;
  }
  /deep/ .van-cell::after {
    border: 0;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 20px;
    .title {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid rgb(233, 224, 224);
    }
    .item {
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding: 20px;
      .left {
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          margin-left: 10px;
          flex: 1;
          width: 100%;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .mashu {
          // width: 100px;
          font-size: 10px;
        }
        .number {
          display: flex;
          justify-content: space-between;
          .youhui {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>