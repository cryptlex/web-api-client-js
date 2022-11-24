module.exports = {
  env: {
    browser: false,
    es2021: true
  },
  extends: ["eslint:recommended",
    'plugin:@typescript-eslint/recommended', "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  plugins: ["@typescript-eslint"],
  parser: '@typescript-eslint/parser',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    "valid-jsdoc": 1,
    "require-jsdoc": 1,
    "@typescript-eslint/no-explicit-any": 0
  }
}
