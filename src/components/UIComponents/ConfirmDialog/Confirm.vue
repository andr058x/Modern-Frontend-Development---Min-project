<template>
  <b-modal ref="confirmModal" 
           :title="title"
           :ok-title="okLabel"
           :cancel-title="cancelLabel"
           @ok="onConfirm"
           @cancel="onCancel">
    <p v-html="message" />
  </b-modal>
</template>

<script>
import ConfirmDialogService from "./ConfirmDialogService";

export default {
  // props:{
  //   'title': {
  //     type: String
  //   },
  //   'message': {
  //     type:String
  //   },
  //   'okLabel':{
  //     type: String,

  //     default: 'SI'
  //   },
  //   'cancelLabel':{
  //     type: String,

  //     default: 'NO'
  //   }
  // },

  data() {
    return {
      handleOk: () => {},
      handleCancel: () => {},
      title: null,
      message: null,
      okLabel: "SI",
      cancelLabel: "NO"
    };
  },

  created() {
    ConfirmDialogService.$on("confirmShow", options => {
      this.title = options.title;
      this.message = options.message;
      if (options.confirmCallback) {
        this.handleOk = options.confirmCallback;
      }
      if (options.cancelCallback) {
        this.handleCancel = options.cancelCallback;
      }

      this.$refs.confirmModal.show();
    });
  },

  methods: {
    onConfirm() {
      this.handleOk();
      this.$refs.confirmModal.hide();
    },
    onCancel() {
      this.handleCancel();
      this.$refs.confirmModal.hide();
    }
  }
};
</script>
