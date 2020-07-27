<template>
  <div class="main">
    <section>
      <header>
        {{title}}
        <span>
          <slot name="allorder"></slot>
        </span>
      </header>
      <main>
        <ul>
          <li v-for="(item,index) in data" :key="index">
            <slot name="number" :number="item.number"></slot>
            <slot name="icon" :url="item.icon"></slot>
            <slot name="name" :data="item.name"></slot>
          </li>
        </ul>
      </main>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["data", "title"],
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  border-radius: 10px;
  background-color: #fdfdfd;
  box-shadow: 2px 2px 20px #413831;
  header {
    font-size: 30px;
    font-weight: 500;
    border-bottom: 1px solid #f4f4f4;
    padding: 20px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 25px;
      color: #95817d;
    }
  }
  main {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        span {
          font-size: 30px;
          font-weight: 400;
          color: #5a201b;
        }
        span:nth-child(1) {
          margin-bottom: 20px;
          color: #62463e;
        }
        img {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>