import Vue from "vue";

export default new Vue({
  data() {
    return {};
  },

  created() {
    utils.log("[confirmDialog] Created");
  },

  methods: {
    show(message, title, confirmCallback, cancelCallback) {
      // solleva l'evento per l'apertura della dialog
      this.$emit("confirmShow", {
        message: message,
        title: title,
        confirmCallback: confirmCallback,
        cancelCallback: cancelCallback
      });
    }
  }
});
