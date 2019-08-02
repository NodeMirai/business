import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import { Carousel } from 'antd-mobile'
import dvaModel from './model'
import InitComponent from 'components/base/life-cycle/init-component'
import './style'

store.use(dvaModel)

@connect(({homeModel}) => ({
  homeModel
}))
export default class Home extends InitComponent {

  state = {
    model: 'homeModel'
  }

  render() {
    const { homeModel } = this.props
    const { title, content } = homeModel

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



