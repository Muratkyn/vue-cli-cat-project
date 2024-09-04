import { createApp } from "vue";
import App from "./App.vue";
import CatsList from "./components/CatsList.vue";
import NewCat from "./components/CatForm.vue";
import CatComponent from "./components/CatComponent.vue";

const app = createApp(App);

app.component("cats-list", CatsList);
app.component("new-cat", NewCat);
app.component("cat-component", CatComponent);

app.mount("#app");
