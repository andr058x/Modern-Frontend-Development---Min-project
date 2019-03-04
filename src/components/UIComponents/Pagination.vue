<template>
  <div class="mt-3 text-right">
    <span v-if="displayTotalPages" class="mr-2">Pagina {{ pagination.page }} di {{ totalPages }}</span>
    <div class="d-inline-block">
      <b-pagination
        v-model="pagination.page"
        :total-rows="pagination.totalRows"
        :per-page="pagination.pageSize"
        @change="onChangePage" />
    </div>

  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      default: undefined
    },
    displayTotalPages: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    totalPages() {
      let pager = this.pagination;
      if (pager.PageSize <= 0) return 1;
      return Math.round(pager.totalRows / pager.pageSize);
    }
  },

  methods: {
    onChangePage(page) {
      this.pagination.page = page;
      this.$emit("onChangePagination", page);
    }
  }
};
</script>
