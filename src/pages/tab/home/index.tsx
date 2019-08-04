import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel, SearchBar } from 'antd-mobile'
import history from 'assets/history'
import { store } from 'assets/store'
import dvaModel from './model'
import InitComponent from 'components/base/life-cycle/init-component'
import './style'

store.use(dvaModel)

@connect(({homeModel}) => ({
  homeModel
}))
export default class Home extends InitComponent {

  state = {
    model: 'homeModel'
  }

  render() {
    const { homeModel } = this.props
    const { bannerList, categoryList, goodList } = homeModel

    return (
      <div className='home'>
        <SearchBar placeholder="Search" onFocus={() => { history.push('/search') }} maxLength={8} />
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {bannerList.map((banner, index) => {
            const { img_url } = banner
            return (<img
              key={`banner${index}`}
              src={img_url}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />)
          })}
        </Carousel>

        <div className='home__category-list'>
          {
            categoryList.map((category, index) => {
              const { id, img_url, text } = category
              return (
                <div key={`category${index}`} className='home__category-list__item'>
                  <img className='img' src={img_url} alt=""/>
                  <div className='text'>{text}</div>
                </div>
              )
            })
          }
        </div>

        <div className='home__good-list'>
          {
            goodList.map((good, index) => {
              const { id, img_url, text } = good
              return (
                <div key={`good${index}`} className='home__good-list__item'>
                  <img className='img' src={img_url} alt=""/>
                  <div className='text'>{text}</div>
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }
}



