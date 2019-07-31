import { action } from 'assets/store'
import http from 'assets/http'

const initData = {
  title: 'This is async',
  content: 'This is async'
}

export default {
  namespace: 'asyncModel',
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
      const data = yield call(getChartData)

      console.log('getInitData', data)
    },
  },
}

function getChartData(params) {
  return http.ajax({
    url: '/b/home',
    params
  })
}