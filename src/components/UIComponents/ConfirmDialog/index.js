import Vue from "vue";
import Confirm from "./Confirm.vue";
import ConfirmDialogService from "./ConfirmDialogService";

const ConfirmDialogPlugin = {
  install(Vue, options) {
    Vue.component("confirm-dialog", Confirm);
    Vue.prototype.$confirmDialog = ConfirmDialogService;
  }
};

export default ConfirmDialogPlugin;
