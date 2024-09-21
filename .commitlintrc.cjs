module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['base', 'image-copyright', 'shadow', 'grid-auto', 'pages', 'docs']],
  },
}
