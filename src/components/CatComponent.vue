<template>
  <div>
    <cats-list
      v-for="cat in cats"
      :key="cat.id"
      :id="cat.id"
      :catName="cat.name"
      :catAge="cat.age"
      :catBreed="cat.breed"
      :is-favourite="cat.isFavourite"
    >
    </cats-list>
  </div>
</template>

<script>
export default {
  inject: ["cats"],
  data() {
    return {};
  },
};
</script>

<style></style>
