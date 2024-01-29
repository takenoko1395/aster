module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
  ],
   parserOptions: {
    ecmaVersion: 'latest',
     sourceType: 'module',
     project: ['./tsconfig.json', './tsconfig.node.json'],
     tsconfigRootDir: __dirname
   }
}
