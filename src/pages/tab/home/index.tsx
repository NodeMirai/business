import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import homeModel from './model'

store.use(homeModel)

@connect(({home}) => ({
  home
}))
export default class Home extends Component<any, any> {

  render() {
    const { home } = this.props
    const { title, content } = home

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



