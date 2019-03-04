<template>
  <div v-if="loading" :class="[getSize, colorCss]" class="la-ball-clip-rotate">
    <div />
  </div>
</template>

<script>
import "./style.css";

export default {
  name: "Spinner",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    colorCss: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: function(value) {
        return ["sm", "2x", "3x"].indexOf(value) !== -1;
      }
    }
  },

  computed: {
    getSize: function() {
      let _size = this.size;

      if (!_size) {
        return null;
      }
      return "la-" + _size;
    }
  }
};
</script>
