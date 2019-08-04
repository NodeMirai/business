import React, { Component } from 'react'
import classname from 'classnames'
import './style'

interface IProps {
  current: number
  onClick: Function
  tabs: Array<object>
}

export default class LeftTab extends Component<IProps, any> {
  
  static defaultProps = {
    current: 0, 
    onClick: () => {},
    tabs: [],
  }

  render() {
    const { tabs, onClick, current } = this.props

    return (
      <div className='left-tab'>
        <div className='left-tab__tabs'>
          {
            tabs.map((item: any, index) => {
              const { id, text } = item
              return (
                <div 
                  key={`leftTab${index}`} 
                  className={classname('left-tab__item', { 'left-tab__item--selected': current === id })} 
                  onClick={() => onClick(id)}
                >
                  {text}
                </div>
              )
            })
          }
        </div>
        <div className=''>
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}



