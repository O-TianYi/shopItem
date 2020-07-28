<template>
  <div>
    <Title :title="$route.params.title"></Title>
  </div>
</template>

<script>
import Title from "../../../components/common/title";
export default {
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