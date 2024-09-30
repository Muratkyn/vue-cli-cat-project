<template>
  <div id="title" v-for="data in datas" :key="data.id">
    <slot name="title" :title1="data.title1" :title2="data.title2"></slot>
  </div>
  <div id="content">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots);
  },
  data() {
    return {
      title: "Title",
      datas: [
        { id: 1, title1: "Add your fav" },
        { id: 2, title2: "Cat!" },
      ],
    };
  },
};
</script>

<style scoped>
#title {
  color: black;
}
</style>
