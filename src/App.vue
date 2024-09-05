<template>
  <section>
    <header>
      <SlotComponent>
        <template v-slot:title="slotProps">
          <h1>{{ slotProps.title1 }}{{ slotProps.title2 }}</h1>
        </template>
        <!-- keep-alive tags keeps if we filla form and keeps the state cached in the dom, can be used with component which is dynamic  -->
        <keep-alive>
          <component :is="isvisible"></component>
        </keep-alive>
        <!-- we can also use #symbol for the template to bind the name of the slot -->
        <template #content>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDim25Sj5loXJbpYM0NKMZI2geNtFbDme5A&s"
            alt="cat"
          />
        </template>
      </SlotComponent>
    </header>
    <ul>
      <CatForm @cat-data="addNewCat" />
      <CatComponent />
    </ul>
  </section>
</template>

<script>
import CatComponent from "./components/CatComponent.vue";
import CatForm from "./components/CatForm.vue";
import SlotComponent from "./components/SlotComponent.vue";

export default {
  components: {
    CatComponent,
    CatForm,
    SlotComponent,
  },
  provide() {
    return {
      cats: this.cats,
      deleteCat: this.deleteCats,
      toggleFavourite: this.toggleFavouriteStatus,
    };
  },
  data() {
    return {
      title: "Cats",
      cats: [
        {
          id: 1,
          name: "Mirko",
          age: 3,
          breed: "European",
          isFavourite: true,
        },
        {
          id: 2,
          name: "Sylvester",
          age: 8,
          breed: "Persian",
          isFavourite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(catId) {
      const identifiedCat = this.cats.find((cat) => cat.id === catId);
      if (!identifiedCat) {
        console.error(`Cat with id ${catId} not found`);
        return;
      }
      identifiedCat.isFavourite = !identifiedCat.isFavourite;
    },
    addNewCat({ newName, newAge, newBreed }) {
      const newAddedCat = {
        id: new Date().toISOString(),
        name: newName,
        age: newAge,
        breed: newBreed,
        isFavourite: false,
      };
      this.cats.push(newAddedCat);
    },
    deleteCats(catId) {
      const catIndex = this.cats.findIndex((cat) => cat.id === catId);
      this.cats.splice(catIndex, 1);
    },
  },
  mounted() {
    //below is the status before we update the isFav within parent component
    console.log(this.cats[0].isFavourite);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #42b883;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #65cd89;
  margin: 0 0 1rem 0;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #35495e;
  background-color: #35495e;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin: 4px;
  border-radius: 3px;
}
#app button:hover,
#app button:active {
  background-color: #4a5562;
  border-color: #4a5562;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app form {
  border-bottom: 4px solid #ccc;
  color: #58004d;
  display: flex;
  flex-direction: column;
}

form div {
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
#app input {
  display: inline-block;
  margin: 4px 4px;
}
</style>
