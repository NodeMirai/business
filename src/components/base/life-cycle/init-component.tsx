import React from 'react'
import action from 'assets/store/utils/action'
import BaseComponent from '../index'

// 页面组件
class InitComponent extends BaseComponent {

  dispatch = (type: string, payload?: object) => {
    this.props.dispatch(action(type, payload))
  }

  componentDidMount() {
    const { model } = (this.state as any) || { model: '' }
    if (!model) {
      return
    }
    this.dispatch(`${model}/getInitData`)
  }

  componentWillUnmount() {
    const { model } = (this.state as any) || { model: '' }
    if (!model) {
      return
    }
    this.dispatch(`${model}/reset`)
  }
}

export default InitComponent
