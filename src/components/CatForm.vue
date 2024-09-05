<template>
  <form @submit.prevent="submitCatData">
    <div class="formInput">
      <label for="">Name:</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div class="formInput">
      <label for="">Age:</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <div class="formInput">
      <label for="">Breed:</label>
      <input type="text" v-model="enteredBreed" />
    </div>
    <div>
      <button class="formButton" :disabled="isInputValid">Add Cat</button>
    </div>
    <!-- <teleport to="body">  teleports a component to which rendered -->
    <ErrorComponent v-if="isInputValid">
      <h1>Error!</h1>
      <p>The form can not be empty!</p>
      <button @click="closeError">Close</button>
    </ErrorComponent>
    <!-- </teleport> -->
  </form>
</template>

<script>
import ErrorComponent from "./ErrorComponent.vue";

export default {
  components: {
    ErrorComponent,
  },
  emits: ["cat-data"],
  data() {
    return {
      isInputValid: false,
      enteredName: "",
      enteredAge: "",
      enteredBreed: "",
    };
  },
  methods: {
    submitCatData() {
      if (this.enteredName && this.enteredAge && this.enteredBreed !== "") {
        this.$emit(
          "cat-data",
          //below we add an object but we could also pass seperate values
          {
            newName: this.enteredName,
            newAge: this.enteredAge,
            newBreed: this.enteredBreed,
          },
          (this.enteredName = ""),
          (this.enteredAge = ""),
          (this.enteredBreed = "")
        );
      } else {
        this.isInputValid = true;
      }
    },
    closeError() {
      this.isInputValid = false;
    },
  },
};
</script>

<style scoped>
.formInput {
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 800;
  margin-bottom: 10px;
}

label {
  width: 8%;
}

input {
  padding: 4px;
}
.formButton {
  display: flex;
  align-self: center;
  margin-left: 10px;
}
</style>
