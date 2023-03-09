module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
