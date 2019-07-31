/**
 * 简化 dispatch({ type, payload }) 的调用
 */
export interface Action {
  type: string
  payload?: object
}

export default function(type: string | object, payload?: object): Action {
  if (type.constructor === String) {
    return { type: type as string, payload }
  }
  return { type: 'setState', payload: type as object }
}
