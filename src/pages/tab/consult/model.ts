import { action } from 'assets/store'
import { store } from 'assets/store'
import http from 'assets/http'

const initData = {
  title: 'This is consult',
  content: 'This is content'
}

export default {
  namespace: 'consultModel',
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
      
    },
  },
}

