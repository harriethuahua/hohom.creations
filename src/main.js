import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

let app = createApp(App);

app.mount("#app");
