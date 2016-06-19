import React from 'react';
import Toolbar from '../containers/Toolbar'
import { getRoute } from '../routes'
import {
  Page,
  Button
} from 'react-onsenui';

export default class Home extends React.Component {
  goTo = id => this.props.navigator.pushPage(getRoute(id))
  render() {
    return (
      <Page>
        <Toolbar navigator={this.props.navigator} />
        <p style={{ padding: '0 15px' }}>
          This is a kitchen sink example that shows
          off the React extension for Onsen UI.
        </p>
        <Button onClick={this.goTo.bind(this, 'longList') }>
          Go to the long list demo
        </Button>
      </Page>
    );
  }
}
