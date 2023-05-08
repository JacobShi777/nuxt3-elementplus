module.exports = {
  extends: [
    '@antfu/eslint-config',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'off', // 关闭未使用的 import 检测
    'curly': ['error', 'multi-line'], // 允许单行 if 语句使用大括号
    'max-statements-per-line': ['error', { max: 2 }], // 一行最多两个语句
  },
}
