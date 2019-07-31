import { create } from 'dva-core'
import createLoading from 'dva-loading'
import { Store as ReduxStore } from 'redux'
import { createLogger } from 'redux-logger'

interface Store extends ReduxStore {
  use: (model: any) => void
}

/**
 * redux中间件数组
 * dispatch action之前会触发一系列中间件
 */
const middlewares = [
  createLogger({
    predicate(getState, action) {
      return !/@@/.test(action.type)
    },
  }),
]

/**
 * 
 */
const options = {
  initialState: {},
  onAction: middlewares,
  onError(err) {
    console.error('dva error', err)
  },
}

const app = create(options)
app.use(createLoading({ namespace: 'loading' }))
app.start()

const store: Store = app._store
store.use = (model) => {
  if (!app._models.some(item => item.namespace === model.namespace)) {
    app.model(model)
  }
}

export default store
