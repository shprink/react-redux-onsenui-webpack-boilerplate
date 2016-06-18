import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import {
  Page,
  Toolbar,
  BackButton,
  Navigator,
  Button
} from 'react-onsenui';

class App extends Component {
  componentDidMount() { }
  renderPage(route, navigator) {
    return (
      <Page>
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">{route.title}</div>
        </Toolbar>

        <Button onClick={() => {
          navigator.pushPage({
            title: 'Another page',
            backButton: <Button onClick={() => navigator.popPage() }>
              Pop page
            </Button>

          });
        } }>
          Push page
        </Button>
        {route.backButton}
      </Page>
    );
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{ title: 'First page' }}
          renderPage={this.renderPage.bind(this) }
          />
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
