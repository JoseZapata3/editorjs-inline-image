module.exports = {
  rules: {
    'class-methods-use-this': ['off'],
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'no-restricted-globals': ['off']
  },
  globals: {
    fetch: false,
    document: false,
    FileReader: false,
  },
  env: {
    "browser": true
  },
};
