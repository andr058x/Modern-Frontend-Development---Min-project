require("bootstrap");

import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue";

// plugin
import CommonComponents from "./commonComponents";
import ConfirmDialog from "./components/UIComponents/ConfirmDialog";
import Alert from "./components/UIComponents/Alert";

import VueForm from "vue-form";
import "./validators";



// app filters
import * as filters from "./filters";
for (let f in filters) {
  utils.log("[bootstrap] loading filter... " + f);
  Vue.use(filters[f]);
}

// plugin setup
Vue.use(BootstrapVue);
Vue.use(CommonComponents);
Vue.use(VueForm);
Vue.use(ConfirmDialog);
Vue.use(Alert);


import "@/assets/style/spinners.css";
import "@/assets/scss/index.scss";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  //store,
  render: h => h(App)
});
