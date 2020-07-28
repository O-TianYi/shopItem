<template>
  <div>
    <Title :title="title"/>
    <List />
  </div>
</template>

<script>
import Title from '../../components/common/title'
import List from '../../components/common/list'
export default {
  components:{
    List,Title
  },
  data() {
    return {
      title:'购物车'
    }
  },
};
</script>

<style lang="less" scoped>
</style>