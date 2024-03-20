// module.exports = {
const config = {
  overrides: [{
    extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
    files: ['md'],
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
    },
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: 'tsconfig.json',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier':[
      'error',{endOfLine: 'auto'}
    ]
  },
  
};

module.exports = config;