import { action } from 'assets/store'
import http from 'assets/http'

const initData = {
  searchContent: '',
  content: 'This is content'
}

export default {
  namespace: 'searchModel',
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
        // const res = yield call(getData)
    },
  },
}

function getData(params) {
  return http.ajax({
    url: '/demo',
    params
  })
}
