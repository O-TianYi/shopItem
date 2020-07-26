<template>
  <div id="app">
    <div class="app">svdoasbdo</div>
    <div class="test">111</div>
    <van-button type="primary">主要按钮</van-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
.test{
    width: 375px;  
    height:375px;
    background: skyblue;
    text-align: center;
    line-height: 375px;
    font-size: 40px;
  }
</style>

<style lang="less" scoped>
@color: yellow;
.app{
    color: @color;
}
</style>
