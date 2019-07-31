import React, { Component } from 'react'
import BaseComponent from '../index'

// 页面组件
class ResetComponent extends BaseComponent {
  componentWillUnmount() {
    const { model } = (this.state as any) || { model: '' }
    if (!model) {
      return
    }
    this.dispatch(`${model}/reset`)
  }
}

export default ResetComponent
