import Vue from "vue";
import en from "vee-validate/dist/locale/en";
import VeeValidate, { Validator } from "vee-validate";

Validator.localize("en", en);

Vue.use(VeeValidate, {
  errorBagName: "formErrors", // do not change!
  fieldsBagName: "formFields", // do not change!
  locale: "en"
});

//
// Custom validator
//

Validator.extend("password", {
  getMessage: field => `The field ${field} is not valid.`,
  validate: value => {
    const regex = /^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[^\da-zA-Z]).{8,30}$/;

    return value && regex.test(value);
  }
});

Validator.extend("email", {
  getMessage: field => `The field ${field} is not valid.`,
  validate: value => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return value && regex.test(value);
  }
});

