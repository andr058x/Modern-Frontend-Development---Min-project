module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/recommended", "@vue/prettier"],

  globals: {
    "utils": true,
    // "apiUtils": true,
    "_": true
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "max-statements": ["warn", 25],
    "max-statements": ["warn", 25],
    "vue/require-default-prop": ["warn", true],
    "vue/require-prop-types": ["warn"],
    "vue/attributes-order": "warn",
    "no-unused-vars": ["warn", { "caughtErrors": "none" }],
    "no-undef": ["warn"],
    "no-useless-escape": ["warn"],
    "vue/max-attributes-per-line": [
      "warn",
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/html-closing-bracket-spacing": "warn",
    "vue/html-closing-bracket-newline": [
      "warn",
      {
        singleline: "never",
        multiline: "never"
      }
    ]
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/recommended", "@vue/prettier"]
};
