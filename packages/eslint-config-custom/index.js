module.exports = {
  extends: ["@nekohack/eslint-config-vue", "prettier"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "vue/no-v-for-template-key-on-child": "off",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index", "default", "error"],
      },
    ],
  },
};
