import Vue from "vue";
import AlertService from "./AlertService";

const AlertPlugin = {
  install(Vue, options) {
    Vue.prototype.$alert = AlertService;
  }
};

export default AlertPlugin;
