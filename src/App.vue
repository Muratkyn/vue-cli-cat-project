<template>
  <section>
    <header>
      <h1>{{ title }}</h1>
    </header>
    <ul>
      <cats-list
        v-for="cat in cats"
        :key="cat.id"
        :id="cat.id"
        :catName="cat.name"
        :catAge="cat.age"
        :catBreed="cat.breed"
        :is-favourite="cat.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
      >
      </cats-list>
    </ul>
  </section>
</template>

<script>
export default {
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
      identifiedCat.isFavourite = !identifiedCat.isFavourite;
      console.log(this.cats[0].isFavourite);
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
  background-color: #58004d;
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
#app li {
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
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
