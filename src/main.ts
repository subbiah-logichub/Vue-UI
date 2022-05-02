import { createApp } from "vue";

import router from "@/routes";
import App from "@/views/app/index.vue";
import store from "@/store";

import "./registerServiceWorker";

import "@/styles/index.scss";

createApp(App).use(store).use(router).mount("#root");
