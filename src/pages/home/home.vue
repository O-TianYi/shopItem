<template>
  <div class="app-container">
    <v-header></v-header>
    <v-footer></v-footer>
  </div>
</template>


<script>
import Home from "../../components/home/header";
import Footer from "../../components/home/footer";
export default {
  name: "Home",
  components: {
    "v-footer": Footer,
    "v-header": Home,
  },
  data() {
    return {};
  },
};
</script>


<style>
</style>

<style lang="less" scoped>
</style>