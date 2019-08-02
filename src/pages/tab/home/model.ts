import { action } from 'assets/store'
import { store } from 'assets/store'
import http from 'assets/http'

const initData = {
  title: 'This is home',
  content: 'This is content'
}

export default {
  namespace: 'homeModel',
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
    /**
     * 首页接口需注意优化，尤其是图片的懒加载与缓存等方面
     * @param param0 
     * @param param1 
     */
    *getInitData({}, { all, call, put }) {
      // 获取轮播图数据
      const bannerRes = yield call(getBanner)
      console.log('bannerRes', bannerRes)
      // 获取商品类目数据
      // 获取商品数据
    },
  },
}

function getBanner(params) {
  return http.ajax({
    url: '/_mock/tab/home/banner',
    params
  })
}