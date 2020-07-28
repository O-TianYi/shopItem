<template>
  <div class="main">
    <Title></Title>
    <NavBar :data="navLists"></NavBar>
    <Main :list="mainData" :other="mainData1"></Main>
  </div>
</template>

<script>
import Title from "../../components/home/header";
import NavBar from "../../components/home/navbar";
import Main from "../../components/home/main";
export default {
  components: {
    Title,
    NavBar,
    Main,
  },
  data() {
    return {
      navLists: [
        {
          id: 1,
          name: "推荐",
          url: [
            "../../../static/image/home/home_ac1.gif",
            "../../../static/image/home/home_ac1.gif",
          ],
        },
        {
          id: 2,
          name: "食品",
          url: [
            "../../../static/image/home/home_ac1.gif",
            "../../../static/image/home/home_ac1.gif",
          ],
        },
        {
          id: 3,
          name: "美妆",
          url: [
            "../../../static/image/home/home_ac3gif",
            "../../../static/image/home/home_ac3gif",
          ],
        },
        {
          id: 4,
          name: "鞋包",
          url: [
            "../../../static/image/home/home_ac1.gif",
            "../../../static/image/home/home_ac1.gif",
          ],
        },
        {
          id: 5,
          name: "水果",
          url: [
            "../../../static/image/home/home_ac1.gif",
            "../../../static/image/home/home_ac1.gif",
          ],
        },
        {
          id: 6,
          name: "百货",
          url: [
            "../../../static/image/home/home_ac1.gif",
            "../../../static/image/home/home_ac1.gif",
          ],
        },
        {
          id: 7,
          name: "女装",
          url: [
            "../../../static/image/home/home_ac1.gif",
            "../../../static/image/home/home_ac1.gif",
          ],
        },
      ],
      mainData: [
        { id: 1, name: "热销排行",url:'../../../static/image/home/home_list_1.png' },
        { id: 2, name: "美妆护肤" ,url:'../../../static/image/home/home_list_2.png'},
        { id: 3, name: "全球购" ,url:'../../../static/image/home/home_list_3.png'},
        { id: 4, name: "数码家电" ,url:'../../../static/image/home/home_list_4.png'},
        { id: 5, name: "进口食品" ,url:'../../../static/image/home/home_list_5.png'},
        { id: 6, name: "新品直播" ,url:'../../../static/image/home/home_list_6.png'},
        { id: 7, name: "时令鲜果" ,url:'../../../static/image/home/home_list_7.png'},
        { id: 8, name: "研究所" ,url:'../../../static/image/home/home_list_8.png'},
        { id: 9, name: "品牌鞋包" ,url:'../../../static/image/home/home_list_9.png'},
        { id: 10, name: "百货超市" ,url:'../../../static/image/home/home_list_10.png'}
      ],
      mainData1:[
        { id: 1, name: "会员福利" ,url:'../../../static/image/home/home_other_1.png'},
        { id: 2, name: "分享赚钱" ,url:'../../../static/image/home/home_other_2.png'},
        { id: 3, name: "优助手" ,url:'../../../static/image/home/home_other_3.png'},
        { id: 4, name: "领券中心" ,url:'../../../static/image/home/home_other_4.png'},
        { id: 5, name: "积分兑换" ,url:'../../../static/image/home/home_other_5.png'}
      ]
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  padding: 10px;
}
</style>