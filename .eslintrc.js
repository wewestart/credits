/*
  本文件为eslint配置项, 请勿随意修改其中配置项
  说明 :
  以下配置项中
    "off" 或 0 - 为关闭规则
    "warn" 或 1 - 为开启规则, 使用警告 - 进程不会退出
    "error" 或 2 - 为开启规则, 使用错误 - 进程退出
  配置说明中 :
    禁止及必须项 : 开启后未遵循规则的代码, 例如空格、标点、数字类等会被自动纠正; 其余语法类等会直接报错, 进程会被终止, 需手动更正
    避免及注意项 : 不会直接报错, 但是会警告, 进程不会被终止和退出
    功能 : 自动纠正代码相对应规范, 在--fix命令行上的选项可以自动修复一些被这条规则反映的问题
*/

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    es6: true
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  rules: {
    'vue/max-attributes-per-line': [2, {
      'singleline': 10,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "always" | "never",
      "endTag": "always" | "never",
      "selfClosingTag": "always" | "never"
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'accessor-pairs': 2, // 对象中定义了存值器, 必须定义对应的取值器
    'arrow-spacing': [2, { // 规则采用带有before和after属性的对象参数, 每个参数都有一个 Boolean 值
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'], // 单行代码块两边加空格
    'brace-style': [2, '1tbs', { // else 关键字花括号保持在同一行
      'allowSingleLine': true
    }],
    'camelcase': [0, { // 对于变量和函数必须名统一使用驼峰命名法
      'properties': 'always'
    }],
    'comma-dangle': [2, 'never'], // 禁止有多余的行末逗号
    'func-call-spacing': 0, // 函数调用时标识符与括号间禁止留有间隔
    'comma-spacing': [2, { // 逗号前后必须加空格
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], // 必须将逗号置于行末
    'constructor-super': 2, // 子类的构造器中必须调用 super
    'curly': [2, 'multi-line'], // 多行 if 语句必须有括号
    'dot-location': [2, 'property'], // 点号操作符须与属性必须在同一行
    'eol-last': 2, // 文件末尾必须留一空行
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }], // 必须使用 === 替代 == , 对error always ignore 严格警告
    'generator-star-spacing': [2, { // 强化*发生器功能的间距功能
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'], // 禁止丢弃异常处理中err参数
    'indent': [2, 2, { // 必须使用两个空格进行缩进
      'SwitchCase': 1
    }],
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [2, { // 键值对当中冒号与值之间必须留空白
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { // 关键字后面必须加空格
      'before': true,
      'after': true
    }],
    'new-cap': [2, { // 构造函数必须以大写字母开头
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2, // 无参的构造函数调用时必须带上括号
    'no-array-constructor': 2, // 必须使用数组字面量而不是构造器
    'no-caller': 2, // 禁止使用 arguments.callee 和 arguments.caller
    'no-console': 'off', // 禁止写console.log()
    'no-class-assign': 2, // 禁止对类名重新赋值
    'no-cond-assign': 2, // 条件语句中赋值语句使用括号包起来。这样使得代码更加清晰可读, 而不会认为是将条件判断语句的全等号（===）错写成了等号（=）
    'no-const-assign': 2, // 禁止修改使用 const 声明的变量
    'no-control-regex': 0, // 正则中禁止使用控制符
    'no-delete-var': 2, // 禁止对变量使用 delete 操作
    'no-dupe-args': 2, // 禁止定义冗余的函数参数
    'no-dupe-class-members': 2, // 类中禁止定义冗余的属性
    'no-dupe-keys': 2, // 对象字面量中禁止定义重复的属性
    'no-duplicate-case': 2, // switch 语句中禁止定义重复的 case 分支
    'no-duplicate-imports': 0, // 同一模块有多个导入时一次性写完
    'no-empty-character-class': 2, // 正则中禁止使用空字符
    'no-empty-pattern': 2, // 禁止解构空值
    'no-eval': 2, // 禁止使用 eval()
    'no-ex-assign': 2, // catch 中禁止对错误重新赋值
    'no-extend-native': 2, // 禁止扩展原生对象
    'no-extra-bind': 2, // 避免多余的函数上下文绑定
    'no-extra-boolean-cast': 2, // 避免不必要的布尔转换
    'no-extra-parens': [2, 'functions'], // 禁止使用多余的括号包裹函数
    'no-fallthrough': 2, // switch 必须使用 break 来将条件分支正常中断
    'no-floating-decimal': 2, // 禁止省去小数点前面的0
    'no-func-assign': 2, // 避免对声明过的函数重新赋值
    'no-global-assign': 0, // 必须对全局只读对象重新赋值  window = {}  ✗
    'no-implied-eval': 2, // 注意隐式的 eval()
    'no-inner-declarations': [2, 'functions'], // 嵌套的代码块中禁止再定义函数
    'no-invalid-regexp': 2, // 禁止向 RegExp 构造器传入非法的正则表达式
    'no-irregular-whitespace': 2, // 禁止使用非法的空白符
    'no-iterator': 2, // 禁止使用 __iterator__
    'no-label-var': 2, // 外部变量禁止与对象属性重名
    'no-labels': [2, { // 禁止使用标签语句
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2, // 禁止书写不必要的嵌套代码块
    'no-mixed-spaces-and-tabs': 2, // 禁止混合使用空格与制表符作为缩进
    'no-multi-spaces': 2, // 除了缩进, 禁止使用多个空格
    'no-multi-str': 2, // 禁止使用多行字符串
    'no-multiple-empty-lines': [2, { // 禁止有连续多行空行
      'max': 1
    }],
    'no-native-reassign': 2, // 禁止修改只读全局变量
    'no-new-object': 2, // 禁止使用 Object 构造器
    'no-new-require': 2, // 禁止使用 new require
    'no-new-symbol': 0, // 禁止使用 symbol 构造器
    'no-new-wrappers': 2, // 禁止使用原始包装器
    'no-new-func': 0, // 禁止使用 Function 构造器
    'no-obj-calls': 2, // 禁止将全局对象的属性作为函数调用
    'no-octal': 2, // 禁止使用八进制字面量
    'no-octal-escape': 2, // 字符串字面量中禁止使用八进制转义字符
    'no-path-concat': 2, // 使用 __dirname 和 __filename 时避免使用字符串拼接
    'no-proto': 2, // 必须使用 getPrototypeOf 来替代 __proto__ ( 可关闭 )
    'no-redeclare': 2, // 禁止重复声明变量
    'no-regex-spaces': 2, // 正则中禁止使用多个空格
    'no-return-assign': [2, 'except-parens'], // return 语句中的赋值必需有括号包裹
    'no-self-assign': 2, // 避免将变量赋值给自己
    'no-self-compare': 2, // 避免将变量与自己进行比较操作
    'no-sequences': 2, // 避免使用逗号操作符
    'no-shadow-restricted-names': 2, // 避免随意更改关键字的值
    'no-spaced-func': 2, // 禁止功能标识符与其应用程序之间的间距
    'no-sparse-arrays': 2, // 禁止使用稀疏数组（Sparse arrays）
    'no-tabs': 0, // 禁止使用制表符
    'no-template-curly-in-string': 0, // 必须正确使用 ES6 中的字符串模板  const message = 'Hello ${name}'  ✗
    'no-this-before-super': 2, // 使用 this 避免 super() 未被调用
    'no-throw-literal': 2, // 用 throw 抛错时, 抛出 Error 必须是对象而不是字符串
    'no-trailing-spaces': 2, // 行末禁止留空格
    'no-undef': 2, // 使用浏览器全局变量时是否允许加上 window. 前缀
    'no-undef-init': 2, // 禁止使用 undefined 来初始化变量 ( 使用var可关闭 或 用let + null代替 )
    'no-unexpected-multiline': 2, // 禁止使用 (, [, or ` 等作为一行的开始。( 在没有分号的情况下代码压缩后会导致报错, 而坚持这一规范则可避免出错 )。
    'no-unmodified-loop-condition': 2, // 循环语句中必须更新循环变量
    'no-unneeded-ternary': [2, { // 如果有更好的方法, 避免使用三元表达式  let score = val ? val : 0  ✗ ; let score = val || 0   ✓
      'defaultAssignment': false
    }],
    'no-unsafe-negation': 0, // 关系运算符的左值禁止做取反操作  if (!key in obj) {}  ✗
    'no-unreachable': 2, // return、throw、continue、break 后禁止再跟代码
    'no-unsafe-finally': 2, // finally 代码块中禁止再改变进程执行流程
    'no-unused-vars': [2, { // 不定义未使用的变量
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2, // 避免不必要的 .call() 和 .apply()
    'no-useless-computed-key': 2, // 避免使用不必要的计算值作对象属性
    'no-useless-constructor': 2, // 禁止多余的构造器
    'no-useless-escape': 0, // 禁止不必要的转义
    'no-useless-rename': 0, // import, export 和解构操作中, 禁止赋值到同名变量
    'no-whitespace-before-property': 2, // 属性前面禁止加空格
    'no-with': 2, // 禁止使用with
    'object-property-newline': 0, // 对象属性换行时注意统一代码风格
    'one-var': [2, { // 每个 var 关键字单独声明一个变量
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', { // 对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'rest-spread-spacing': 0, // 展开运算符与它的表达式间禁止留空白
    'padded-blocks': [2, 'never'], // 代码块中禁止多余留白
    'quotes': [2, 'single', { // 除需要转义的情况外, 字符串统一使用单引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'], // 禁止使用分号
    'semi-spacing': [2, { // 遇到分号时空格必须前后留白
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'], // 代码块首尾必须留空格
    'space-before-function-paren': [2, 'never'], // 函数声明时括号与函数名间加空格
    'space-in-parens': [2, 'never'], // 圆括号间必须留空格
    'space-infix-ops': 2, // 字符串拼接操作符之间留空格
    'no-constant-condition': 0, // 禁止使用常量作为条件表达式的条件（循环语句除外）
    'space-unary-ops': [2, { // 一元运算符后必须跟一个空格
      'words': true,
      'nonwords': false
    }],
    'spaced-comment': [2, 'always', { // 注释首尾必须留空格
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'], // 模板字符串中变量前后禁止加空格
    'use-isnan': 2, // 检查 NaN 必须使用 isNaN()
    'valid-typeof': 2, // 必须用合法的字符串跟 typeof 进行比较操作 ( 可关闭 )
    'wrap-iife': [2, 'any'], // 自调用匿名函数时必须使用括号包裹
    'yield-star-spacing': [2, 'both'], // yield * 中的 * 前后必须要有空格
    'yoda': [2, 'never'], // 必须书写优雅的条件语句  if (42 === age) { } ; ✗  if (age === 42) { }  ✓
    'prefer-const': 2, // 在标记使用let关键字声明的变量, 禁止在初始分配后从未重新分配
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // debugger是否禁止使用
    'object-curly-spacing': [2, 'always', { // 对象文字的大括号内必须保持一致的间距, 适用于字符串及对象的解构赋值导入导出说明
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] // 在数组括号内必须保持一致的间距
  }
}
