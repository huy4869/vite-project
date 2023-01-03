import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import './assets/index.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(router);
// @ts-ignore
app.use(AOS.init())

app.mount("#app");
