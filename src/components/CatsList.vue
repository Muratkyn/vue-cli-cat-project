<template>
  <li>
    <h2>{{ catName }} {{ isFavourite ? "(Fav)" : "" }}</h2>
    <button @click="toggleFavourite">toggle Fav</button>
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
    <button @click="$emit('cat-delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["catName", "catAge", "catBreed", "isFavorite"],
  props: {
    id: {
      type: Number,
      required: true,
    },
    catName: {
      type: String,
      required: true,
    },
    catAge: {
      type: Number,
      required: true,
    },
    catBreed: String,
    isFavourite: {
      type: Boolean,
      default: false,
      required: false,
      // validator: function (val) {
      //   return val === "1" || val === "0";
      // },
    },
  },
  emits: ["toggle-favourite", "cat-delete"],
  // emits: {
  //   "toggle-favourite": function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       throw new Error("Id is missing!");
  //     }
  //   },
  // },
  name: "CatsList",
  data() {
    return {
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
    toggleFavourite() {
      this.$emit("toggle-favourite", this.id);
      /// props can not be mutated directly!!!  error  Unexpected mutation of "isFavorite" prop
      // if (this.isCatFavorite === "1") {
      //   this.isCatFavorite = "0";
      // } else {
      //   this.isCatFavorite = "1";
      // }
    },
  },
};
</script>

<style></style>
