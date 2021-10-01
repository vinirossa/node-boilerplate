module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [message => message.includes('Merge branch')],
  rules: {
    'body-max-line-length': [1, 'never', 100],
    'footer-max-line-length': [1, 'never', 100]
  }
}
