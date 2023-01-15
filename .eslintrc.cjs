/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended', // eslint官方lint包
    'plugin:vue/recommended', // vue官方lint包
    '@vue/eslint-config-typescript/recommended', // vue官方 ts lint 配置包
    '@vue/eslint-config-prettier' // vue 官方 解决 eslint 与 prettier 的功能冲突
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        // 单引号 默认false
        singleQuote: true,
        // 使用分号 默认true
        semi: false,
        // 对象中的空格 默认true
        // bracketSpacing: false,
        //每行最多多少个字符换行
        printWidth: 100,
        // 是否在对象或数组最后一个元素后面是否加逗号  <es5|none|all>
        trailingComma: 'none',
        //对vue中的script及style标签缩进
        vueIndentScriptAndStyle: true
      }
    ]
  }
}
