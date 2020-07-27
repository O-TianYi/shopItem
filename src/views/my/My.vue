<template>
  <div class="mypage">
    <MyHeader></MyHeader>
    <section>
      <my-card :data="myCardData" :title="myCardTitle" class="my-card">
        <template slot-scope="number" slot="number">
          <span>{{number.number}}</span>
        </template>
        <template slot-scope="data" slot="name">
          <span>{{data.data}}</span>
        </template>
      </my-card>

      <img class="ad" src="../../../static/image/tabber_cart_ac.png" width="100%" height="80px" />

      <my-card :data="myToolData" :title="myOrderTitle" class="order">
        <template v-slot:allorder>查看所有订单</template>
        <template slot="icon" slot-scope="icon">
          <img :src="icon.url" alt />
        </template>
        <template slot="name" slot-scope="name">
          <span>{{name.data}}</span>
        </template>
      </my-card>

      <my-card :data="myToolData" :title="myToolTitle">
        <template slot="icon" slot-scope="icon">
          <img :src="icon.url" alt />
        </template>
        <template slot="name" slot-scope="name">
          <span>{{name.data}}</span>
        </template>
      </my-card>
    </section>
  </div>
</template>

<script>
import MyHeader from "../../components/my/my-header";
import Card from "../../components/my/card";
export default {
  components: {
    MyHeader,
    "my-card": Card,
  },
  data() {
    return {
      myCardTitle: "我的卡券",
      myToolTitle: "我的工具",
      myOrderTitle: "我的订单",
      myCardData: [
        { id: 1, number: 28, name: "优惠券" },
        { id: 2, number: 12, name: "红包" },
        { id: 3, number: 686, name: "积分" },
      ],
      myToolData: [
        {
          id: 1,
          icon: "../../../static/image/tabber_home.png",
          name: "我的拼团",
        },
        {
          id: 2,
          icon: "../../../static/image/tabber_home.png",
          name: "成长中心",
        },
        {
          id: 3,
          icon: "../../../static/image/tabber_home.png",
          name: "地址管理",
        },
        {
          id: 4,
          icon: "../../../static/image/tabber_home.png",
          name: "联系客服",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.mypage {
  background: #eeeff1;
  section {
    margin-top: 60px;
    padding: 20px;
    img {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .order{
      margin-bottom: 30px;
    }
  }
}
</style>