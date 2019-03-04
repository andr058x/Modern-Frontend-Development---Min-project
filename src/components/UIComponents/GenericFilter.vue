<template>
  <div class="input-group">
    <input v-model="filter"
           :placeholder="placeholder"
           type="text"
           class="form-control"
           aria-label="filtro"
           aria-describedby="ricerca" />
    <div class="input-group-append">
      <span class="input-group-text">
        <app-icon icon="magnify" class="mdi-lg" />
      </span>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    minChars: {
      type: Number,
      default: 3,
      validator: function(value) {
        return value > 0;
      }
    }
  },

  data() {
    return {
      filter: ""
    };
  },

  watch: {
    filter: function(val, oldVal) {
      if (val.length >= this.minChars || val.length == 0) {
        this.onFilter(val);
      }
    }
  },
  methods: {
    onFilter: _.debounce(
      function(value) {
        this.$emit("onChangeFilter", value);
      },
      // milliseconds we wait for the user to stop typing
      500
    )
  }
};
</script>
