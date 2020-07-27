<template>
  <div>
    <Title :title="title"></Title>
    收藏商品页面
    </div>
</template>

<script>
import Title from '../../components/common/title'
export default {
  data() {
    return {
      title:'收藏商品'
    }
  },
  components:{
    Title
  }
};
</script>

<style lang="less" scoped>
</style>