module.exports = {
  // TODO 增加 @typescript-eslint 相关规则
  // TODO 增加 react 代码规范
  parser: '@typescript-eslint/parser',
  extends: ['plugin:react/recommended'],
  plugins: ['@typescript-eslint', 'react', 'import'],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /* ############### 代码规范配置 ############### */
    'no-unused-vars': ['warn'],
    'react/prop-types': ['off'],
    'react/no-unused-state': ['warn'],

    /* ############### 代码格式化配置（autofix） ############### */
    /* =============== Import sort =============== */
    'import/first': 'off',
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'internal', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],

    /* =============== Possible Errors =============== */
    // 避免提交的代码出现 debugger
    'no-debugger': ['error'],
    // 若已是布尔类型，就不需要再经过布尔转换了
    'no-extra-boolean-cast': ['warn'],
    // 禁止出现 !key in object，应是 !(key in object)
    'no-unsafe-negation': ['error'],

    /* =============== Best Practices =============== */
    // if 只有一条语句时，也增加大括号
    curly: ['warn', 'all'],
    // 优先使用 a.b 而不是 a['b'] 来访问属性
    'dot-notation': ['warn'],
    // 要求使用 === 和 !== 进行判断
    eqeqeq: ['warn', 'always'],
    // if 语句中 return 之后不需要有 else 块
    'no-else-return': ['warn'],
    // 应使用 0.5 而不是 .5，待定
    // 'no-floating-decimal': ['warn'],
    // 禁止出现多余的连续空格
    'no-multi-spaces': [
      'warn',
      {
        ignoreEOLComments: true,
        exceptions: { VariableDeclarator: true },
      },
    ],
    // 去掉多余的 return
    'no-useless-return': ['warn'],
    // IIFE 调用应用括号包裹
    'wrap-iife': ['warn', 'inside'],

    /* =============== Stylistic Issues =============== */
    // 数组元素前后不留空格
    'array-bracket-spacing': ['warn', 'never'],
    // TODO 数组元素的排列，array-element-newline 效果不好，暂时依赖 prettier 的格式化
    'array-bracket-newline': ['warn', 'consistent'],
    // 'array-element-newline': ['warn', { multiline: true }],
    // 单行代码块中前后留空格
    'block-spacing': ['warn', 'always'],
    // 统一大括号的风格
    'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
    // 多行数组、对象时，需要在最后一行加上 ,
    'comma-dangle': ['warn', 'always-multiline'],
    // 使用 [] 属性时，不需要留空格
    'computed-property-spacing': ['warn', 'never'],
    // 文件末尾要有空行
    'eol-last': ['warn', 'always'],
    // 去掉函数标识符和其调用之间的空格
    'func-call-spacing': ['warn', 'never'],
    // 函数参数，要么单行，要么都换行，
    'function-paren-newline': ['warn', 'multiline'],
    // 返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['warn', 'beside'],
    // 统一缩进
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    // jsx 属性优先使用单引号
    'jsx-quotes': ['warn', 'prefer-single'],
    // 对象字面量的键值空格
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      },
    ],
    // 在类成员间增加空行
    'lines-between-class-members': ['warn', 'always'],
    // 通过 new 调用构造函数时要求使用圆括号
    'new-parens': ['warn'],
    // 链式调用需换行
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],
    // 若 if 作为唯一的语句出现在 else 语句中，可以改成 else if
    'no-lonely-if': ['warn'],
    // 最多连续空行数
    'no-multiple-empty-lines': ['warn', { max: 2 }],
    // 去掉行尾空格
    'no-trailing-spaces': [
      'warn',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    // 去掉不必要的二元表达式
    'no-unneeded-ternary': ['warn'],
    // 去掉属性前的空白
    'no-whitespace-before-property': ['warn'],
    // 操作符换行时的位置
    'operator-linebreak': ['warn', 'before'],
    // 函数内不留前后空行
    'padded-blocks': ['warn', 'never'],
    // 对象属性能不用引号就不用，但如果需要，则保持一致
    'quote-props': ['warn', 'consistent-as-needed'],
    // 统一引号
    quotes: ['warn', 'single', { allowTemplateLiterals: false }],
    // 统一分号
    semi: [
      'warn',
      'never',
      {
        beforeStatementContinuationChars: 'always',
      },
    ],
    'semi-style': ['warn', 'last'],
    // 去掉函数声明时与括号间的空格
    'space-before-function-paren': ['warn', 'never'],
    // 去掉括号中前后空格
    'space-in-parens': ['warn', 'never'],
    // 操作符两侧有空格
    'space-infix-ops': ['warn'],
    // 一元操作符两侧空格
    'space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
      },
    ],
    // 注释前的空格
    'spaced-comment': ['warn', 'always'],
    // switch 的冒号空格
    'switch-colon-spacing': [
      'warn',
      {
        after: true,
        before: false,
      },
    ],
    // 去掉模板字面量的空格
    'template-tag-spacing': ['warn', 'never'],
    // 文件开头不带 BOM
    'unicode-bom': ['warn', 'never'],

    /* =============== Stylistic Issues =============== */
    // 去掉不必要的箭头函数体大括号
    // REVIEW 暂时去掉，某些情况下不好排版
    // 'arrow-body-style': ['warn', 'as-needed'],
    // 只有一个参数、没有指令块时忽略括号（airbnb 风格）
    'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: true }],
    // 箭头函数的箭头前后都需要空格
    'arrow-spacing': ['warn', { before: true, after: true }],
    // generator 函数中 * 号前加空格
    'generator-star-spacing': [
      'warn',
      { before: false, after: true, anonymous: 'neither', method: 'neither' },
    ],
    // 给有可能产生混淆的箭头函数加上括号
    'no-confusing-arrow': ['warn', { allowParens: true }],
    // 去掉不必要的计算属性
    'no-useless-computed-key': ['warn'],
    // 去掉不必要的重命名(import/export/解构)
    'no-useless-rename': ['warn'],
    // 禁止使用 var 声明变量
    'no-var': ['warn'],
    // 对象字面量简写
    'object-shorthand': ['warn', 'properties'],
    // 未修改的变量使用 const 声明
    'prefer-const': ['warn', { destructuring: 'all' }],
    // 使用模板而非字符串拼接
    'prefer-template': ['warn'],
    // 扩展表达式之前不留空格
    'rest-spread-spacing': ['warn', 'never'],
    // 模板字符串中的大括号中，前后不留空格
    'template-curly-spacing': ['warn', 'never'],
    // 在 yield 与 * 之前不加空格
    'yield-star-spacing': ['warn', 'after'],
  },
}
