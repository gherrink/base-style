module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['base', 'image-copyright', 'grid-auto', 'pages', 'docs']],
  },
}
