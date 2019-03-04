<!--
  This component render icons based on Iconify library(see: https://github.com/iconify-design/iconify)

  HOW TO USE
  ==========

  By default the MaterialDesignIcons (mdi) are used, so simply
  type the icon name you want to render without the prefix 'mdi-'. For example:

  <app-icon icon="check" />
  <app-icon icon="phone-plus" />

  If you want to use some other library use the following pattern:

  <library-prefix>:<icon-name>

  for example:

  <app-icon icon="fa:check" />  // use FontAwesome

  For all available collections, see https://iconify.design/icon-sets/
-->

<template>
  <i><span :data-icon="iconName" :class="['iconify', iconCss]" /></i>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: null,
      validator: function(value) {
        return ["sm", "lg", "2x", "3x", "5x", "7x"].indexOf(value) !== -1;
      }
    }
  },

  computed: {
    iconName: function() {
      var _css = this.icon.indexOf(":") != -1 ? this.icon : `mdi-${this.icon}`;
      return _css;
    },

    iconCss: function() {
      let _size = this.size;

      if (!_size) {
        return null;
      }

      return `icon-${_size}`;
    }
  }
};
</script>
