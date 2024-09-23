module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['base', 'image-copyright', 'nav-burger-control', 'shadow', 'elevate', 'grid-auto', 'pages', 'docs']],
  },
}
