module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['src/components/button/City.jsx'], 
      files: ['src/test/City.test.jsx'], 
      files: ['src/components/button/Country.jsx'], 
      files: ['src/test/Country.test.jsx'], 
      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
      },
    }
  ],
  overrides: [
    {
      files: ['src/components/button/Country.jsx'], 
      files: ['src/test/Country.test.jsx'], 
      rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
      },
    }
  ]
}
