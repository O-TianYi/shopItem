<template>
  <div>
    <Title :title="$route.params.title"></Title>成长中心
  </div>
</template>

<script>
import Title from "../../../components/common/title.vue";
export default {
  components: {
    Title,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>