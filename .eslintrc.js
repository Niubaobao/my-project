module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'], // "@vue/prettier"
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 2
      }
    ],
    'linebreak-style': 0,
    'global-require': 0,
    'max-len': [
      'error',
      {
        code: 150,
        ignoreStrings: true
      }
    ]
    // indent: [2, 4] // 强制使用一致的缩进
    // eqeqeq: [2, 'always'], // 要求使用 === 和 !==
    // semi: [2, 'never'], // 要求或禁止使用分号代替 ASI
    // quotes: [2, 'single'], // 强制使用一致的反勾号、双引号或单引号
    // 'eslint linebreak-style': [0, 'error', 'windows']
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  }
}
