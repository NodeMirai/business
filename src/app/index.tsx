import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { store } from 'assets/store'
import history from 'assets/history'
import './style'

import MyRouter from './routes/Router'
import routes from './routes'

console.log('routes', routes)

class App extends Component<any, any> {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>{/* MyRouter.render(routes) */}</Router>
        </Provider>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
