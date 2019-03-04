<template>
  <div class="container-fluid">
    <div class="error-content">
      <h1 class="opacity-75">404</h1>
      <p class="m-0">
        <app-icon icon="error_outline" size="3x" />
        <span class="text-uppercase  d-block">Content not found</span>
      </p>
      <p>
          It looks like you're looking for a page that's no longer available or non-existent.
      </p>
      <a :to="{ name:'layout'}" href="" class="btn btn-primary">Back to Home</a>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/Layout/AppFooter";

export default {
  components: {
    AppFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-content {
  text-align: center;

  h1 {
    font-size: 210px;
    font-weight: bold;
    line-height: 190px;
  }
}
</style>
