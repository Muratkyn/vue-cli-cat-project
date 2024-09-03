import { createApp } from "vue";
import App from "./App.vue";
import CatsList from "./components/CatsList.vue";
import NewCat from "./components/CatForm.vue";

const app = createApp(App);

app.component("cats-list", CatsList);
app.component("new-cat", NewCat);

app.mount("#app");
