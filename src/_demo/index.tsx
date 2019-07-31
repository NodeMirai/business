import React, { Component } from 'react'
import { connect } from 'react-redux'
import InitComponent from 'components/base/life-cycle/init-component'
import { store } from 'assets/store'
import model from './model'
import './style.scss'

store.use(model)

@connect(({ demo }) => ({
  demo
}))
class Demo extends InitComponent {

  state = {
    model: 'demo'
  }

  onSubmit = (e) => {

  }

  render() {

    return (
      <div className='demo' >
        <h2>demo</h2>
      </div>
    )
  }
}

export default Demo


