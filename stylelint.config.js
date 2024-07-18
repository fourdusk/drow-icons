/** @type {import('stylelint').Config} */
const config = {
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    }
  ],
  plugins: [],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  rules: {
    'alpha-value-notation': 'number',
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'layer', 'apply', 'config']
      }
    ]
  }
}

export default config
