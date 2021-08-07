<template>
  <div id="app">
    <Header />
    <Slider />
    <Content />
    <!-- <Timeline /> -->
    <Footer />
  </div>
</template>

<script>
// import Timeline from "./components/Timeline.vue";
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Slider from "./components/Slider.vue";
import Footer from "./components/Footer.vue";
// import $ from "jquery";

export default {
  name: "App",
  components: {
    Header,
    Content,
    Slider,
    // Timeline,
    Footer,
  },
  beforeCreate() {
    // $("body").attr("style", "background: #B07849");
  },
  beforeUnmount() {
    // $("body").attr("style", "");
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap");

html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
#app {
  font-family: "Noto Sans TC", "MonteCarlo", sans-serif;
  box-sizing: border-box;
  width: 100vw;
  // background-color: $brightPink;
  background-color: $brightPink2;
  // background-color: $brightGreen;
  padding-top: 85px;
}
</style>
