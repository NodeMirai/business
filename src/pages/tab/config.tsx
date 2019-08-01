import React from 'react'
import AsyncComponent from 'components/async-component'

const Home = AsyncComponent(() => import('./home'))
const Category = AsyncComponent(() => import('./category'))
const Consult = AsyncComponent(() => import('./consult'))
const Shopcart = AsyncComponent(() => import('./shopcart'))
const User = AsyncComponent(() => import('./user'))

export const tabList = [
  {
    title: '首页',
    key: 'home',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
    />,
    badge: 1,
    dataSeed: 'logId',
    path: '/tab',
    component: Home
  },
  {
    title: '分类',
    key: 'category',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
    />,
    dataSeed: 'logId1',
    path: '/tab/category',
    component: Category
  },
  {
    title: '咨询',
    key: 'consult',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
    />,
    dataSeed: 'logId1',
    path: '/tab/consult',
    component: Consult
  },
  {
    title: '购物车',
    key: 'shopcart',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
    />,
    dataSeed: 'logId1',
    path: '/tab/shopcart',
    component: Shopcart
  },
  {
    title: '我的',
    key: 'user',
    icon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
    />,
    selectedIcon: <div style={{
      width: '22px',
      height: '22px',
      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
    />,
    dataSeed: 'logId1',
    path: '/tab/user',
    component: User
  },
]