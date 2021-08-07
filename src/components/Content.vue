<template>
  <div class="content py-5 container-fluid">

    <h1 class="h5 text-center">Vivre la vie que vous aimez.</h1>
    <div class="d-flex align-items-flex-start justify-content-center">
      <div class="card w-25 m-3" v-for="(item, i) in items" :key="i">
        <img class="card-img-top" :src="item.src" />
        <div class="card-body">
          <p class="card-text">{{ item.date }}</p>
          <p class="card-text">{{ item.description }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import $ from 'jquery';

export default {
  name: 'Content',
  data() {
    return {
      items: [
        {
          src: require('@/assets/0802-2.jpg'),
          description: 'Lava Lava',
          date: '2021-08-02',
        },
        {
          src: require('@/assets/0802.jpg'),
          description: 'Archimedes',
          date: '2021-08-02',
        },
        {
          src: require('@/assets/0730-3.jpg'),
          description: 'Seashell',
          date: '2021-07-30',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables.scss";

h1 {
  color: $secondary;
}
</style>
