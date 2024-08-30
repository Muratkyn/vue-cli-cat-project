import { createApp } from "vue";
import App from "./App.vue";
import CatsList from "./components/CatsList.vue";

const app = createApp(App);

app.component("cats-list", CatsList);

app.mount("#app");
