import AppIcon from "@/components/UIComponents/AppIcon.vue";
import Spinner from "@/components/UIComponents/Spinner/Spinner.vue";
import ForbiddenAlert from "@/components/UIComponents/ForbiddenAlert.vue";
//import ActionModal from '@/components/UIComponents/ActionModal.vue'

const commonComponents = {
  install(Vue) {
    Vue.component("app-icon", AppIcon);
    Vue.component("spinner", Spinner);
    Vue.component("forbidden-alert", ForbiddenAlert);
    //Vue.component('action-modal', ActionModal)
  }
};

export default commonComponents;
