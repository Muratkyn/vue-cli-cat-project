<template>
  <li>
    <h2>{{ catName }} {{ isCatFavorite === "1" ? "(Fav)" : "" }}</h2>
    <button @click="toggleFav">toggle Fav</button>
    <button @click="toggleVisibility">
      {{ isVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="isVisible">
      <li>
        <strong>Age:</strong>
        {{ catAge }}
      </li>
      <li>
        <strong>Breed:</strong>
        {{ catBreed }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["catName", "catAge", "catBreed", "isFavorite"],
  props: {
    catName: {
      type: String,
      required: true,
    },
    catAge: {
      type: String,
      required: true,
    },
    catBreed: String,
    isFavorite: {
      type: String,
      default: "0",
      required: false,
      // validator: function (val) {
      //   return val === "1" || val === "0";
      // },
    },
  },
  name: "CatsList",
  data() {
    return {
      isCatFavorite: this.isFavorite,
      isVisible: false,
      cats: {
        name: "Mirko",
        age: 3,
        breed: "European",
      },
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    toggleFav() {
      /// props can not be mutated directly!!!  error  Unexpected mutation of "isFavorite" prop
      if (this.isCatFavorite === "1") {
        this.isCatFavorite = "0";
      } else {
        this.isCatFavorite = "1";
      }
    },
  },
};
</script>

<style></style>
