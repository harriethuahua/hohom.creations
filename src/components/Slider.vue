<template>
  <div class="slider container-fluid px-0">
    <img class="cover" :src="coverSrc" />
  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'Slider',
  data() {
    return {
      coverSrc: require('@/assets/ogimage.jpg'),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";

.slider {
  height: 300px;
}
.cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
