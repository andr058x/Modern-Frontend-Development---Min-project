<template>
  <b-popover :target="target" placement="rightbottom" triggers="focus">
    <p>Scegliere una password che soddisfi i seguenti criteri:</p>
    <ul class="list-icons">
      <li>
        <span v-show="passwordIcon('length')">
          <app-icon icon="verified" class="text-success" />
        </span>
        <span v-show="!passwordIcon('length')">
          <app-icon icon="shield-outline" class="text-danger" />
        </span>
        Minimo 8 caratteri
      </li>
      <li>
        <span v-show="passwordIcon('upper')">
          <app-icon icon="verified" class="text-success" />
        </span>
        <span v-show="!passwordIcon('upper')">
          <app-icon icon="shield-outline" class="text-danger" />
        </span>
        Almeno un carattere Maiuscolo
      </li>
      <li>
        <span v-show="passwordIcon('digit')">
          <app-icon icon="verified" class="text-success" />
        </span>
        <span v-show="!passwordIcon('digit')">
          <app-icon icon="shield-outline" class="text-danger" />
        </span>
        Almeno un numero
      </li>
      <li>
        <span v-show="passwordIcon('special')">
          <app-icon icon="verified" class="text-success" />
        </span>
        <span v-show="!passwordIcon('special')">
          <app-icon icon="shield-outline" class="text-danger" />
        </span>
        Almeno un carattere speciale (escluso lo spazio)
      </li>
    </ul>
  </b-popover>
</template>
<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    },
    password: {
      type: String
    }
  },

  methods: {
    passwordIcon(type) {
      let test = null;

      switch (type) {
        case "length":
          test = /.{8,}/.test(this.password);
          break;

        case "upper":
          test = /[A-Z]+/.test(this.password);
          break;

        case "lower":
          test = /[a-z]+/.test(this.password);
          break;

        case "digit":
          test = /[0-9]+/.test(this.password);
          break;

        case "special":
          test = /[^\s\da-zA-Z]/.test(this.password);
          break;

        default:
          break;
      }

      return test;
    }
  }
};
</script>
