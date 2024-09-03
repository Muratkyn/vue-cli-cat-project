<template>
  <form @submit.prevent="submitCatData">
    <div class="formClass">
      <label for="">Name:</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="">Age:</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <div>
      <label for="">Breed:</label>
      <input type="text" v-model="enteredBreed" />
    </div>

    <div>
      <button>Add Cat</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["cat-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
      enteredBreed: "",
    };
  },
  methods: {
    submitCatData() {
      this.$emit(
        "cat-data",
        //below we add an object but we could also pass seperate values
        {
          newName: this.enteredName,
          newAge: this.enteredAge,
          newBreed: this.enteredBreed,
        }
      );
    },
  },
};
</script>

<style></style>
