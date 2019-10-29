/**
 * 判断 action.type 是否处于 loading 状态
 */
import { store } from '@assets/store'

export default function(
  type: string | Array<string>,
  loading?: object
): boolean {
  const state = loading || store.getState().loading
  if (typeof type === 'string') {
    return state.effects[type]
  }
  if (Array.isArray(type)) {
    return type.some(item => state.effects[item])
  }
  return false
}
