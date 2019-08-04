import Router from './Router'

const config = [
  {
    path: 'tab',
    component: 'tab',
    title: '登录',
    isExact: false,
  },
  {
    path: 'search',
    component: 'search',
    title: '搜索',
  }
]

export default config.map(item => new Router(item))
