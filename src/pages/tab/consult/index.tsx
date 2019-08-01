import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import consultModel from './model'

store.use(consultModel)

@connect(({consultModel}) => ({
  consultModel
}))
export default class Consult extends Component<any, any> {

  render() {
    const { consultModel } = this.props
    const { title, content } = consultModel

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



