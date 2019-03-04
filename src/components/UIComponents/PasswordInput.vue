<template>
  <div class="input-group">
    <input
      :value="value"
      :disabled="disabled"
      :type="displayPassword ? 'text' : 'password'"
      :maxlength="maxLength"
      class="form-control"
      @input="handleChange"
      @change="handleChange"
     />
    <span v-if="enableToggle" class="input-group-btn input-group-append">
      <a href="#" class="py-2 pl-2" @click="toggleShowPassword">
        <app-icon
          v-show="displayPassword"
          icon="eye"
          title="Nascondi password"
         />
        <app-icon
          v-show="!displayPassword"
          icon="eye-off"
          title="Mostra password"
         />
      </a>
    </span>
  </div>
</template>

<script>
export default {
  name: "PasswordInput",
  // support for vee-validate (https://baianat.github.io/vee-validate/examples/custom-component.html)
  //'this' = component instance; value,name = props
  $_veeValidate: {
    name() {
      return this.name;
    },
    value() {
      return this.value;
    }
  },

  props: {
    name: String,
    value: String,
    disabled: { type: Boolean, default: false },
    maxLength: { type: Number, default: 30 },
    enableToggle: { type: Boolean, default: true }
  },

  data() {
    return {
      displayPassword: false
    };
  },

  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    },
    toggleShowPassword() {
      this.displayPassword = !this.displayPassword;
    }
  }
};
</script>
