import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import BootstrapVue3 from "bootstrap-vue-3";
import { messages } from "./locales/index.js";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./style.css";

const i18n = createI18n({
  legacy: false,
  // sync:false,
  locale: "ja-JP", // set locale
  fallbackLocale: "en", // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
});

import App from "./App.vue";

const app = createApp(App);
app.use(i18n);
app.use(BootstrapVue3);
app.mount("#app");
