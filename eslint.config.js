import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import VueEslintParser from 'vue-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 读取 .eslintrc-auto-import.json 文件
// 这里的目的
const autoImportPath = path.resolve(__dirname, 'src/types/.eslintrc-auto-import.json')
const autoImportConfig = JSON.parse(fs.readFileSync(autoImportPath, 'utf8'))

export default [
  {
    files: ['src/**/*.{js,ts,cjs,mts,jsx,tsx,vue}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImportConfig.globals, // 合并自动导入的 globals
      },
      parser: VueEslintParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      // 允许 ESLint 直接运行 Prettier 并将结果作为 ESLint 规则来报告
      // "prettier/prettier": "error"
      // eslint（https://eslint.bootcss.com/docs/rules/）
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符

      // typeScript (https://typescript-eslint.io/rules)
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/semi': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off', // 禁止使用 Function 作为 type。

      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式

      indent: ['error', 2], // 缩进使用2个空格
      semi: ['error', 'never'], //语句末尾不加分号
      'no-unused-vars': 'off',
    },
  },
  // {
  //   files: ["*.vue", "**/*.vue"],
  //   languageOptions: {
  //     parserOptions: {
  //       parser: "@typescript-eslint/parser",
  //       sourceType: "module",
  //     },
  //   },
  // },
  eslintConfigPrettier,
  {
    ignores: ['node_modules/', 'dist/', '**/*.d.ts', 'public/'],
  },
]
