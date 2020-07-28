<template>
  <div class="mypage">
    <MyHeader :data="myHeaderData"></MyHeader>
    <section>
      <my-card :data="myCardData" :title="myCardTitle" class="my-card">
        <template slot-scope="number" slot="number">
          <span class="bolder">{{number.number}}</span>
        </template>
        <template slot-scope="data" slot="name">
          <span>{{data.data}}</span>
        </template>
      </my-card>

      <img class="ad" src="../../../static/image/my/my_ac.gif" />

      <my-card :data="myOrderData" :title="myOrderTitle" class="order">
        <template v-slot:allorder>
          查看所有订单
          <van-icon name="arrow" />
        </template>
        <template slot="icon" slot-scope="icon">
          <img :src="icon.url" class="icon-style" alt />
        </template>
        <template slot="name" slot-scope="name">
          <span>{{name.data}}</span>
        </template>
      </my-card>

      <my-card :data="myToolData" :title="myToolTitle">
        <template slot="icon" slot-scope="icon">
          <img :src="icon.url" class="icon-style" alt />
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
  activated() {
    console.log("----------进activated--------");
  },
  deactivated() {
    console.log("----------进deactivated--------");
  },
  data() {
    return {
      myHeaderData: [
        { id: 1, name: "收藏商品", number: 126, routerURL: "ShangPin" },
        { id: 2, name: "收藏店铺", number: 58, routerURL: "DianPu" },
        { id: 3, name: "关注", number: 63, routerURL: "GuanZhu" },
      ],
      myCardTitle: "我的卡券",
      myToolTitle: "我的工具",
      myOrderTitle: "我的订单",
      myCardData: [
        { id: 1, number: 28, name: "优惠券", routerURL: "YouHuiQuan" },
        { id: 2, number: 12, name: "红包", routerURL: "HongBao" },
        { id: 3, number: 686, name: "积分", routerURL: "JiFen" },
      ],
      myToolData: [
        {
          id: 1,
          icon: "../../../static/image/my/my_pintuan.gif",
          name: "我的拼团",
          routerURL: "PinTuan",
        },
        {
          id: 2,
          icon: "../../../static/image/my/my_chengzhang.gif",
          name: "成长中心",
          routerURL: "ChengZhang",
        },
        {
          id: 3,
          icon: "../../../static/image/my/my_address.gif",
          name: "地址管理",
          routerURL: "Address",
        },
        {
          id: 4,
          icon: "../../../static/image/my/my_lianxikefu.gif",
          name: "联系客服",
          routerURL: "LianXiKeFu",
        },
      ],
      myOrderData: [
        {
          id: 1,
          icon: "../../../static/image/my/my_daifukuan.gif",
          name: "待付款",
          routerURL: "DaiFuKuan",
        },
        {
          id: 2,
          icon: "../../../static/image/my/my_daifahuo.gif",
          name: "待发货",
          routerURL: "DaiFaHuo",
        },
        {
          id: 3,
          icon: "../../../static/image/my/my_daishouhuo.gif",
          name: "待收货",
          routerURL: "DaiShouHuo",
        },
        {
          id: 4,
          icon: "../../../static/image/my/my_daipingjia.gif",
          name: "待评价",
          routerURL: "DaiPingJia",
        },
        {
          id: 5,
          icon: "../../../static/image/my/my_tuikuan.gif",
          name: "退款/售后",
          routerURL: "TuiKuan",
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
    .ad {
      margin-top: 30px;
      margin-bottom: 30px;
      height: 150px;
      width: 100%;
    }
    .order {
      margin-bottom: 30px;
    }
  }
}
</style>