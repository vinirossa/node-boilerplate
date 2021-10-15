module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [
    message =>
      new RegExp("^Merge branch '.*'$").test(message.trim()) ||
      new RegExp("^Merge branch '.*' into .*$").test(message.trim())
  ],
  defaultIgnores: false,
  rules: {
    'body-max-line-length': [1, 'never', 100],
    'footer-max-line-length': [1, 'never', 100]
  }
}
