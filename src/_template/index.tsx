import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import dvaModel from './model'

store.use(dvaModel)

@connect(({<%= model %>Model}) => ({
  <%= model %>Model
}))
export default class Home extends Component<any, any> {
  
  render() {
    const { <%= model %>Model } = this.props
    const { title, content } = <%= model %>Model

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



