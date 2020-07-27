<template>
  <div class="main">
    <div class="goback" @click="$router.go(-1)">《</div>
    <span class="title">{{title}}</span>
    <span class="edit">编辑</span>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px;
  .goback {
    cursor: pointer;
  }
  .title {
    font-size: 40px;
    font-weight: 600;
    color: #47241c;
  }
  .edit {
    font-size: 35px;
    font-weight: 300;
    color: #8d9b9d;
    cursor: pointer;
  }
}
</style>