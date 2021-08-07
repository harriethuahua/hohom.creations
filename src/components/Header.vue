<template>
  <div class="header text-center">
    <img class="logo" :src="logoSrc" @click="goTop()" />
  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  name: "Header",
  data() {
    return {
      logoSrc: require("@/assets/logo.jpg"),
    };
  },
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";

.header {
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 2;
}
.logo {
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
