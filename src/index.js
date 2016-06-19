import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import getStore from './store'

import Navigator from './containers/Navigator'

const store = getStore();

class App extends Component {
  componentDidMount() { }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
