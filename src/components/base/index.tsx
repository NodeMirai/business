import React, { Component } from 'react'
import { setTitle, isIPhoneX } from 'assets/tool'
import action from 'assets/action'

export default class BaseComponent extends Component<any, any> {

  constructor(props) {
    super(props)
    const { title = '' } = this.props
    setTitle(title)
  }

  dispatch(type: string, payload?: object) {
    this.props.dispatch(action(type, payload))
  }

  IPhoneXPadding = '34px'

  get isIPhoneX() {
    return isIPhoneX()
  }

  get iphoneXBottomStyle() {
    const style = this.isIPhoneX
      ? { paddingBottom: this.IPhoneXPadding, height: 'auto' }
      : {}

    return style
  }
}
