import { action } from 'assets/store'
import { store } from 'assets/store'
import http from 'assets/http'

const initData = {
  tabs: [],
  goodList: [],
  currentTabId: 0,
}

export default {
  namespace: 'categoryModel',
  state: initData,
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload }
    },
    reset() {
      return { ...initData }
    },
  },
  effects: {
    *getInitData({}, { all, call, put }) {
      const { data } = yield call(getCategory)
      yield put(action('update', data))
    },
  },
}

function getCategory(params) {
  return http.ajax({
    url: '/_mock/tab/category',
    params
  })
}
