<!---->

<template>
  <div :class="['alert shadow-lg mx-auto w-50 mt-3 p-5', alertSyle]">
    <h3 class="text-info">
      <slot name="title">
        <app-icon icon="fa:exclamation-circle" class="mr-2" />Accesso negato
      </slot>
    </h3>
    <slot name="message">
      Non è possibile accedere a questa sezione perch&eacute; non si dispone
      delle autorizzazioni necessarie oppure il servizio non è attivo. <br />
    </slot>

    <slot name="footer">
      <a href="/" class="btn btn-primary mt-4 d-inline-block"
        >Vai alla Homepage</a
      >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "info",
      validator: function(value) {
        return ["info", "danger", "warning"].indexOf(value) != -1;
      }
    }
  },

  computed: {
    alertSyle: function() {
      return `alert-${this.type}`;
    }
  }
};
</script>
