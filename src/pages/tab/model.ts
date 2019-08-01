import { action } from 'assets/store'
import http from 'assets/http'

const initData = {
  currentTabkey: 'home'
}

export default {
  namespace: 'tabModel',
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