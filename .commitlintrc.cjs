module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [
      'docs',
      'pages',
      'accordion',
      'base',
      'elevate',
      'image-copyright',
      'grid-auto',
      'nav-burger-control',
      'nav-main',
      'shadow',
    ]],
  },
}
