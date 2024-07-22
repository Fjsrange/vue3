import { createApp } from "vue";
import App from "./App.vue";
// 第一步:引入pinia
import {createPinia} from 'pinia';

// 创建一个应用
const app = createApp(App);
// 第二步:调用pinia
const pinia = createPinia();
app.use(pinia)
// 第三步:安装pinia
app.mount("#app");
