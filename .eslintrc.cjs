/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    es6: true,
    es2021: true,
    browser: true,
    node: true
  },
  globals: {
    window: true,
    document: true
  },
  plugins: ['html'],
  extends: [
    'eslint:recommended', // eslint官方lint包
    'plugin:vue/recommended', // vue官方lint包
    '@vue/eslint-config-typescript/recommended', // vue官方 ts lint 配置包
    '@vue/eslint-config-prettier' // vue 官方 解决 eslint 与 prettier 的功能冲突
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    requireConfigFile: false,
    //emcaVersion用来指定你想要使用的 ECMAScript 版本
    sourceType: 'module',
    // 设置为 "script" (默认)或"module"（如果你的代码是 ECMAScript 模块)
    ecmaFeature: {
      //想使用额外的语言特性
      // "jsx":true, //启用jsx
      // "globalReturn":true, //在全局作用域下使用return语句
      impliedStrict: true //启用全局strict mode
      // "experimentalObjectRestSpread":false
      //启用实验性的object rest/spread properties支持
      //(不建议开启)
    }
  },
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
  },
  overrides: [
    {
      files: ['*.html'],
      processor: 'vue/.vue'
    }
  ]
}
