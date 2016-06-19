import React from 'react';
import Toolbar from '../containers/Toolbar'
import {
  Page
} from 'react-onsenui';

export default class LongList extends React.Component {
  render() {
    return (
      <Page>
        <Toolbar navigator={this.props.navigator} />
        <p style={{ padding: '0 15px' }}>
          This is a kitchen sink example that shows
          off the React extension for Onsen UI.
        </p>

      </Page>
    );
  }
}
