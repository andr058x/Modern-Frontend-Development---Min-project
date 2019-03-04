
<template>
  <div v-cloak>
    <router-view />
  </div>
</template>

<style lang="scss">
[v-cloak] {
  background-color: #000;
}
</style>


<script>
// import store from "./store/index";
// import { mapGetters } from "vuex";

export default {
  name: "App",
  // computed: mapGetters({
  //   isAuthenticated: "isAuthenticated"
  // }),
  mounted() {
    utils.log("app-template -> start");

    // ==============================================================
    // This is for the top header part and sidebar part
    // ==============================================================
    var set = function() {
      var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      var topOffset = 70;
      if (width < 1170) {
        $("body").addClass("mini-sidebar");
        $(".navbar-brand span").hide();
        $(".sidebartoggler i").addClass("ti-menu");
      } else {
        $("body").removeClass("mini-sidebar");
        $(".navbar-brand span").show();
        $(".sidebartoggler i").removeClass("ti-menu");
      }

      var height =
        (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      if (height < 1) height = 1;
      if (height > topOffset) {
        $(".page-wrapper").css("min-height", height + "px");
      }
    };
    $(window).ready(set);
    $(window).on("resize", set);
  }
};
</script>
