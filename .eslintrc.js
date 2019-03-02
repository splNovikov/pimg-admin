module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'react/jsx-one-expression-per-line': false
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
};
