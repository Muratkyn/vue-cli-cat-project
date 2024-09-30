<template>
  <li>
    <h2>{{ catName }} {{ isFavourite ? "(Fav)" : "" }}</h2>
    <button @click="toggleFavourite(id)">toggle Fav</button>
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
    <button @click="deleteCat(id)" class="bg-color">Delete</button>
  </li>
</template>

<script>
export default {
  inject: ["deleteCat", "toggleFavourite"],
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
