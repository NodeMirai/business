import { action } from 'assets/store'
import { store } from 'assets/store'
import http from 'assets/http'

const initData = {
  bannerList: [],
  categoryList: [],
  goodList: [],
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
      const { data: bannerData } = yield call(getBanner)
      yield put(action('update', {
        bannerList: bannerData.bannerList
      }))
      // 获取商品类目数据
      const { data: categoryData } = yield call(getCategory)
      yield put(action('update', {
        categoryList: categoryData.categoryList
      }))
      // 获取商品数据
      const { data: goodsData } = yield call(getGoods)
      yield put(action('update', {
        goodList: goodsData.goodList
      }))
    },
  },
}

function getBanner(params) {
  return http.ajax({
    url: '/_mock/tab/home/banner',
    params
  })
}

function getCategory(params) {
  return http.ajax({
    url: '/_mock/tab/home/category',
    params
  })
}

function getGoods(params) {
  return http.ajax({
    url: '/_mock/tab/home/good',
    params
  })
}