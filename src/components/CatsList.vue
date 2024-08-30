<template>
  <div>
    <button @click="toggleVisibility()">
      {{ isVisible ? "hide" : "show" }} cats
    </button>
    <ul v-if="isVisible">
      <li :key="cat.age" v-for="cat in cats">
        {{ cat.name }} - {{ cat.age }} years old
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CatsList",
  data() {
    return {
      isVisible: false,
      cats: [
        {
          name: "Mirko",
          age: 3,
          breed: "European",
        },
        {
          name: "Sylvester",
          age: 8,
          breed: "Persian",
        },
      ],
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style></style>
