import { createApp } from "vue";
import App from "./app.vue";
import bh from "@bh-ui/components";
const app = createApp(App);
app.use(bh);
app.mount("#app");
