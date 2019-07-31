import React, { Component } from 'react'
//import { Toast } from '@q/q-react'

interface IProps {
  error: any
}
class Loading extends Component<IProps, any> {
  getContent() {
    const { error } = this.props

    /* if (error) {
      console.error('[AsyncComponent Error]: ', error)
      Toast.fail('加载出错，请稍后重试')
      return ''
    } */
    return (
      <div className='sk-fading-circle'>
        <div className='sk-circle1 sk-circle' />
        <div className='sk-circle2 sk-circle' />
        <div className='sk-circle3 sk-circle' />
        <div className='sk-circle4 sk-circle' />
        <div className='sk-circle5 sk-circle' />
        <div className='sk-circle6 sk-circle' />
        <div className='sk-circle7 sk-circle' />
        <div className='sk-circle8 sk-circle' />
        <div className='sk-circle9 sk-circle' />
        <div className='sk-circle10 sk-circle' />
        <div className='sk-circle11 sk-circle' />
        <div className='sk-circle12 sk-circle' />
      </div>
    )
  }

  render() {
    return <div className='async-component-loading'>{this.getContent()}</div>
  }
}

export default Loading
