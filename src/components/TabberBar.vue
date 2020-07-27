// 底部导航栏
<template>
  <ul class="my-tabber-bar">
    <li
      @click="changeIdx(index,item.name)"
      class="tabber-item"
      :class="{ act: index === idx }"
      v-for="(item,index) in list"
      :key="index"
    >
      <img class="icon" :src="[ index === idx ? item.icon_act : item.icon]" alt />
      <span class="text">{{item.text}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      idx: 0,
      list: [
        {
          icon: "../../static/image/tabber_home.png",
          icon_act: "../../static/image/tabber_home_ac.png",
          text: "首页",
          name: "Home",
        },
        {
          icon: "../../static/image/tabber_video.png",
          icon_act: "../../static/image/tabber_video_ac.png",
          text: "直播",
          name: "Video",
        },
        {
          icon: "../../static/image/tabber_user.png",
          icon_act: ".../../static/image/tabber_user_ac.png",
          text: "团长中心",
          name: "Member",
        },
        {
          icon: "../../static/image/tabber_cart.png",
          icon_act: "../../static/image/tabber_cart_ac.png",
          text: "购物车",
          name: "Cart",
        },
        {
          icon: "../../static/image/tabber_person.png",
          icon_act: "../../static/image/tabber_person_ac.png",
          text: "我的",
          name: "My",
        },
      ],
    };
  },
  methods: {
    changeIdx(index, name) {
      if (index === this.idx) {
        return;
      }

      this.idx = index;

      console.log(this);
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="less" scoped>
.my-tabber-bar {
  height: 100px;
  display: flex;
  justify-content: space-between;

  .tabber-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    color: #afafae;
    .icon {
      width: 60px;
      height: 60px;
    }
    .text {
      font-size: 24px;
      margin-top: 10px;
    }
  }

  .act {
    color: #333333;
  }
}
</style>