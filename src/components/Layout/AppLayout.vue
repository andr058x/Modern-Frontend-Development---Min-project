<template>
  <div>
    <app-header />
    <app-navbar />
    <app-content />
    <app-footer />
    <confirm-dialog />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppNavbar from "./AppNavbar.vue";
import AppContent from "./AppContent.vue";
import AppFooter from "./AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppNavbar,
    AppContent,
    AppFooter
  },

  mounted(){
    utils.log("[AppLayout] loading appLayout... ");
  }
};


</script>
