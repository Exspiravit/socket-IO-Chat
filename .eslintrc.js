module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'eol-last': ['error', 'always'],
    'no-console': 'off',
    'space-before-function-paren': ['error', 'always']
  },
  globals: {
    __dirname: false,
    process: false
  }
}
