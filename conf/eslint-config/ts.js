module.exports = {
  plugins: ['@typescript-eslint', 'import'],
  extends: ['./index.js', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
};
