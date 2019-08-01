import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import categoryModel from './model'

store.use(categoryModel)

@connect(({categoryModel}) => ({
  categoryModel
}))
export default class Category extends Component<any, any> {
  
  render() {
    const { categoryModel } = this.props
    const { title, content } = categoryModel

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    )
  }
}



