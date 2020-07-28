<template>
  <div>
    <Title :title="$route.params.title"></Title>收藏商品页面
  </div>
</template>

<script>
import Title from "../../../components/common/title";
export default {
  mounted() {},
  data() {
    return {};
  },
  components: {
    Title,
  },
};
</script>

<style lang="less" scoped>
</style>