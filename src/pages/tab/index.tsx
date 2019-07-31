import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import BaseComponent from 'components/base'
import asyncModel from './model'

store.use(asyncModel)

@connect(({asyncModel}) => ({
  asyncModel
}))
export default class Async extends BaseComponent {
  
  componentDidMount() {
    const { dispatch } = this.props
    this.dispatch('asyncModel/getInitData')
  }

  onClick = (e: any) => {
    const { path = '/' } = e.target.dataset
    const { history } = this.props
    history.push(path)
  }

  render() {
    const { asyncModel } = this.props
    const { title, content } = asyncModel

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



