<template>
  <a
    href="javascript:void(0)"
    class="btn"
    title="Aggiorna"
    @click.prevent="onClick"
  >
    <app-icon icon="refresh" />
  </a>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit("onRefresh");
    }
  }
};
</script>
