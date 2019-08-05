import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBar } from 'antd-mobile'
import history from 'assets/history'
import { store } from 'assets/store'
import dvaModel from './model'

store.use(dvaModel)

@connect(({ searchModel }) => ({
  searchModel,
}))
export default class Search extends Component<any, any> {
  autoFocusInst = null;

  componentDidMount() {
    this.autoFocusInst.focus()
  }

  onCancel = () => {
    location.href = 'https://www.baidu.com/'
  };

  render() {
    const { searchModel } = this.props
    const { searchContent, content } = searchModel

    return (
      <div>
        <SearchBar
          ref={ref => (this.autoFocusInst = ref)}
          value={searchContent}
          placeholder='Search'
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={this.onCancel}
          showCancelButton
        />
      </div>
    )
  }
}
