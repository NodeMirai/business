import Loadable from 'react-loadable'
import ClassUtils from '@assets/Class-utils'
import Loading from './loading'

const classUtils = new ClassUtils()

function AsyncComponent(opts) {
  // 默认配置
  const defaultOpts = {
    loading: Loading, // loading组件，必填
    delay: 300, // 大于这个毫秒数才会展示
    timeout: 10000, // 超时时间
  }

  if (classUtils.isFunction(opts)) {
    return Loadable(Object.assign(defaultOpts, { loader: opts }))
  }

  if (!classUtils.isObject(opts)) {
    throw new Error('[AsyncComponent Error]: the parameter should be a Function or an Object')
  }

  if (!opts.hasOwnProperty('loader')) {
    throw new Error('[AsyncComponent Error]: the parameter should have a method named [loader]')
  }

  return Loadable(Object.assign(defaultOpts, opts))
}

export default AsyncComponent
