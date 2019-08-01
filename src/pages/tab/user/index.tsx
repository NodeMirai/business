import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import userModel from './model'

store.use(userModel)

@connect(({userModel}) => ({
  userModel
}))
export default class User extends Component<any, any> {
  
  render() {
    const { userModel } = this.props
    const { title, content } = userModel

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



