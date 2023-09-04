module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    'react/prop-types': 'off',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': [2, { allowNamespace: true }],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: ['variableLike', 'memberLike', 'method'],
        format: ['camelCase'],
      },
      {
        selector: 'parameter',
        // allow parameters with leading underscore
        leadingUnderscore: 'allow',
        // PascalCase for components, camelCase for everything else
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'property',
        leadingUnderscore: 'allowSingleOrDouble',
        format: ['camelCase', 'snake_case'],
      },
      {
        selector: 'property',
        leadingUnderscore: 'allowSingleOrDouble',
        modifiers: ['requiresQuotes'],
        // no validation for properties that require quotes (HTTP headers, HTML properties etc.)
        format: null,
      },
      {
        selector: 'objectLiteralProperty',
        leadingUnderscore: 'allowSingleOrDouble',
        // PascalCase for style object properties, camelCase for everything else
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'objectLiteralProperty',
        leadingUnderscore: 'allowSingleOrDouble',
        modifiers: ['requiresQuotes'],
        // no validation for object properties that require quotes (HTTP headers, HTML properties etc.)
        format: null,
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        // PascalCase for components, UPPER_CASE for constants, camelCase for everything else
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.test.tsx',
        '**/*.spec.tsx',
        '**/*.cy.ts',
        '**/*.cy.tsx',
      ],
      plugins: ['jest'],
      rules: {
        'jest/no-commented-out-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
