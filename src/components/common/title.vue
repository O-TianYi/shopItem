<template>
  <div class="main" :class="{redstyle: isred}">
    <div class="goback" @click="$router.go(-1)">
      <van-icon name="arrow-left" size="8vw" />
    </div>
    <span :class="{title,redstyle: isred}" >{{title}}</span>
    <span :class="{edit: true,hideenstyle: isred}" >编辑</span>
  </div>
</template>

<script>
export default {
  props: ["title","isred"],
};
</script>

<style lang="less" scoped>
.main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px;
  border-bottom: 2px solid #fcfcfc;
  .goback {
    cursor: pointer;
  }
  .title {
    flex: 1;
    text-align: center;
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
.redstyle{
  background-color: #CB1558;
  color: #fff!important;
}
.hideenstyle{
  display: none;
}
</style>