<template>
  <div class="main">
    <Title :isred="true" :title="title"/>
    <Header :data="headerData"/>
  </div>
</template>

<script>
import Title from '../../components/common/title'
import Header from '../../components/video/header'
export default {
  components:{
    Title,Header
  },
  data() {
    return {
      title:'好新优直播',
      headerData:[
        {id: 1,name:'关注'},
        {id: 2,name:'精选'},
        {id: 3,name:'女装'},
        {id: 4,name:'品牌馆'},
        {id: 5,name:'逛街'},
        {id: 6,name:'百货'},
        {id: 7,name:'探店'}
      ]
    }
  },
};
</script>

<style lang="less" scoped>
// .main{
// }
</style>