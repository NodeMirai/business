import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBar } from 'antd-mobile';
import LeftTab from 'components/leftTab'
import { store } from 'assets/store'
import InitComponent from 'components/base/life-cycle/init-component'
import categoryModel from './model'
import './style'

store.use(categoryModel)

@connect(({categoryModel}) => ({
  categoryModel
}))
export default class Category extends InitComponent {
  
  state = {
    model: 'categoryModel'
  }

  onCategoryClick = (id) => {
    console.log(id)
  }

  onGoodClick = (id) => {
    console.log(id)
  }

  render() {
    const { categoryModel } = this.props
    const { tabs, goodList, currentTabId} = categoryModel

    return (
      <div className='category'>
        <SearchBar placeholder="Search" maxLength={8} />
        <LeftTab onClick={(id) => this.onCategoryClick(id)} current={currentTabId} tabs={tabs}>
          <div className='category__goodlist'>
            {
              goodList.map((item, index) => {
                const { id, img_url, text } = item
                return (
                  <div onClick={() => this.onClick(id)} key={`good${index}`} className='category__goodlist__item'>
                    <img className='img' src={img_url} alt=""/>
                    <div className='text'>{text}</div>
                  </div>
                )
              })
            }
          </div>
        </LeftTab> 
      </div>
    )
  }
}



