<template>
  <div>
    <div class="card">
      <div class="tab-content">
        <list />
      </div>
    </div>
  </div>
</template>



<script>
import List from "./List.vue";

export default {
  components: {
    List
  },
  name: "Products",
  data(){
    return{
      item : {
        type: Object,
        default: null
      }
    }
  },
  methods: {
    execAction(){
          utils.log("exec");

      switch (target) {
        case "openDetails":
          this.item = item;
          break;
      
        default:
          break;
      }
    }
  },

  mounted(){
    utils.log("[Products/Index] mounted. ");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>