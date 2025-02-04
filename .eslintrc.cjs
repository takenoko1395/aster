module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@stylistic/recommended-extends',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic', "react"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/jsx-one-expression-per-line': 'off', // <p>Hello, {name}</p> みたいなコードを許可する
    '@stylistic/brace-style': [
      'error',
      '1tbs', // } else { 書き方を要求する
    ],
    'react-hooks/exhaustive-deps': 'off',
    '@stylistic/indent': ['error', 2],
    '@typescript-eslint/no-misused-promises': [
      'error',
      // https://github.com/orgs/react-hook-form/discussions/9325#discussioncomment-4060566
      // https://typescript-eslint.io/rules/no-misused-promises/#checksvoidreturn
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        }
      },
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
}
