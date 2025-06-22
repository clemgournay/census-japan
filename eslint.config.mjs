import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const new_function = () => {

}

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'quotes': [2, 'single'],
      'indent': ['error', 2],
      'semi-style': ['error', 'last'],
      'space-before-function-paren': ['error', 'always'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          'selector': 'function',
          'format': ['StrictPascalCase']
        },
      ]
    }
  }
];

export default eslintConfig;
