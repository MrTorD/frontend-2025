// @ts-check

import eslint from '@eslint/js';
import { defineConfig, globalIgnores  } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores(["lab1/*.js"]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
);