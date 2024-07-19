const { defineConfig } = require('eslint-define-config')

const config = defineConfig({
  root: true,
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:vue/vue3-recommended',
    '@unocss',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // eslint
    yoda: 'off',
    complexity: ['error', 10],
    'consistent-return': 'off',
    'one-var': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'sort-imports': 'off',
    'no-ternary': 'off',
    'id-length': 'off',
    'max-lines-per-function': ['error', 100],
    'max-statements': ['error', 20],
    'no-magic-numbers': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // typescript
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',

    // vue
    'vue/multi-word-component-names': 'off',
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts'
        },
        style: {
          lang: 'scss'
        }
      }
    ],
    'vue/block-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': [
      'error',
      'camelCase',
      {
        ignores: []
      }
    ],
    'vue/define-emits-declaration': ['error', 'type-literal'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
        defineExposeLast: true
      }
    ],
    'vue/no-ref-object-reactivity-loss': ['error'],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'SLOT',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'ATTR_DYNAMIC',
          'ATTR_STATIC',
          'ATTR_SHORTHAND_BOOL',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          'delimiters',
          'comments',
          'components',
          'directives',
          'filters',
          'extends',
          'mixins',
          'provide',
          'inject',
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          'props',
          'propsData',
          'emits',
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          'template',
          'render',
          'renderError'
        ]
      }
    ]
  }
})

module.exports = config
