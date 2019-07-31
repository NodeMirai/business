/**
 * 适用于一般开发，但不适用于需要严谨类型判断的工具开发
 * 原因详见：http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring
 * 可被以下代码hack
 * ```javascript
 * Object.defineProperty(obj, Symbol.toStringTag, {
 *   get: function() { return ’Array’ }
 * })
 * ```
 */

interface ClassUtils {
  _const: any
  isFunction: (e: any) => boolean
  isObject: (e: any) => boolean
  isArguments: (e: any) => boolean
  isArray: (e: any) => boolean
  isBoolean: (e: any) => boolean
  isDate: (e: any) => boolean
  isError: (e: any) => boolean
  isJson: (e: any) => boolean
  isMath: (e: any) => boolean
  isNull: (e: any) => boolean
  isNumber: (e: any) => boolean
  isRegexp: (e: any) => boolean
  isString: (e: any) => boolean
}

class ClassUtils {
  constructor() {
    this._initConst()
    this._initShortcut()
  }

  /**
   * 初始化常量
   */
  _initConst() {
    this._const = {
      // 合法的类型
      // 参考http://www.ecma-international.org/ecma-262/5.1/#sec-8.6.2
      legalClassStr: [
        'arguments',
        'array',
        'boolean',
        'date',
        'error',
        'function',
        'json',
        'math',
        'null',
        'number',
        'object',
        'regexp',
        'string',
        'undefined',
      ],
    }
  }

  _firstUpper(str) {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`
  }

  /**
   * 初始化快捷方法
   */
  _initShortcut() {
    this._const.legalClassStr.forEach((str) => {
      this[`is${this._firstUpper(str)}`] = (_value) => {
        return this.classChecker(_value, str)
      }
    })
  }

  /**
   * 校验变量的类型是否正确
   * @param  {*}                     _value   变量
   * @param  {String/Function/Array} _classes 正确的类型，可以是’string‘、'String’、 String、['String', Boolean]
   * @return {Boolean}                        变量的类型是否正确
   */
  classChecker(_value, _classes) {
    const classes = this.getClass(_classes) != 'array' ? [_classes] : _classes
    const value = _value
    const vClass = this.getClass(value)

    return classes.some((item) => {
      return this._type2String(item) === vClass
    })
  }

  /**
   * 把输入的类型转成约定的合法值
   * @param  {Function/String} _type 类型，比如’string‘、'String’、 String
   * @return {String}                上面的举例类型会转成'string'
   */
  _type2String(_type) {
    let type = _type
    const tClass = this.getClass(type)

    if (tClass !== 'string' && tClass !== 'function') {
      console.error('这不是一个合法指定类型：${type}')
      return ''
    }

    if (tClass == 'function') {
      type = type
        .toString()
        .split(' ')[1]
        .slice(0, -2)
    }

    type = type.toLowerCase()

    if (~this._const.legalClassStr.indexOf(type)) {
      return type
    }
    console.error(`没有这个类型：${type}`)
    return ''
  }

  /**
   * 获取变量的类型（lower case），其中，
   * 传入undefined返回'undefined'
   * 传入null返回'null'
   * @param  {*}      value 变量
   * @return {String}       类型
   */
  getClass(value) {
    return Object.prototype.toString
      .call(value)
      .split(' ')[1]
      .slice(0, -1)
      .toLowerCase()
  }
}

export default ClassUtils
