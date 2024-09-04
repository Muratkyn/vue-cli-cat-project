<template>
  <div>
    <CatsList
      v-for="cat in cats"
      :key="cat.id"
      :id="cat.id"
      :catName="cat.name"
      :catAge="cat.age"
      :catBreed="cat.breed"
      :is-favourite="cat.isFavourite"
    />
  </div>
</template>

<script>
import CatsList from "./CatsList.vue";
export default {
  components: {
    CatsList,
  },
  inject: ["cats"],
  data() {
    return {};
  },
};
</script>

<style></style>
