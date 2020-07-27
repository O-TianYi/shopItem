<template>
  <div class="page">
    <div class="main">
      <router-view />
    </div>
    <TabberBar />
  </div>
</template>

<script>
import TabberBar from "../components/TabberBar.vue";
export default {
  components: {
    TabberBar,
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1 0 auto;
  }
}
</style>