module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-prettier'
  ],
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-recommended'
  ],
  ignoreFiles: [
    '**/node_modules/**'
  ],
  rules: {
    //'at-rule-no-unknown': null,
    //'scss/at-rule-no-unknown': true,
    'prettier/prettier': true
  }
}
