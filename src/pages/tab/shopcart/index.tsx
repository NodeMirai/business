import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import shopcartModel from './model'

store.use(shopcartModel)

@connect(({shopcartModel}) => ({
  shopcartModel
}))
export default class Shopcart extends Component<any, any> {
  
  render() {
    const { shopcartModel } = this.props
    const { title, content } = shopcartModel

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



