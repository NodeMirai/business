import React from 'react'
import { connect } from 'react-redux'
import { store } from 'assets/store'
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import BaseComponent from 'components/base'
import history from 'assets/history'
import tabModel from './model'
import { tabList } from './config'

store.use(tabModel)

const model = 'tabModel'

@connect(({tabModel}) => ({
  tabModel
}))
export default class TabPage extends BaseComponent {

  componentDidMount() {
    const tab = tabList.find(item => item.path === location.pathname) || { key: 'home' }
    this.dispatch(`${model}/update`, { currentTabkey: tab.key })
  }

  onTabClick = () => {

  }

  render() {

    const { tabModel } = this.props
    const { currentTabkey } = tabModel

    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {
            tabList.map((tabItem: any, index) => {
              const { title, key, icon, selectedIcon, dataSeed, path, component } = tabItem
              return (
                <TabBar.Item
                  title={title}
                  key={key}
                  icon={icon}
                  selectedIcon={selectedIcon}
                  selected={currentTabkey === key}
                  /* badge={1}   // 这两个属性是动态的，待定
                  dot */
                  onPress={() => {
                    this.dispatch(`${model}/update`, { currentTabkey: key })
                    history.replace(path)
                  }}
                  data-seed={dataSeed}
                >
                  <Route
                    key={`tabroute${index}`}
                    exact
                    path={path}
                    component={component}
                  />
                </TabBar.Item>
              )
            })
          }
        </TabBar>
      </div>
    )
  }
}



