import Router from './Router'

const config = [
  {
    path: 'tab',
    component: 'tab',
    title: '登录',
  }
]

export default config.map(item => new Router(item))
