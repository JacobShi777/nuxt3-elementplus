module.exports = {
  /* 继承某些已有的规则 */
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
  ],
  overrides: [
    // 扫描 .vue/html 文件中的<style>标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'string-quotes': 'double', // 指定字符串使用单引号或双引号
    'color-hex-case': 'lower', // 16 进制颜色全小写
    'color-hex-length': 'long', // 禁止16禁止颜色小写
    'rule-empty-line-before': 'always', // 在规则之前的空行必须始终有一个空行
    'block-opening-brace-space-before': 'always', // 在块的开大括号之前必须有一个空格
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'],
      },
    ],
    'selector-attribute-whitespace': 'none', // 以下是chatGPT给的配置
    'selector-combinator-space-after': 'always-single-line',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-empty-lines': 0,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'selector-max-id': 0,
    'selector-max-class': 3,
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always-single-line"
  },
}
