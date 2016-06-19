import React from 'react';
import classnames from 'classnames'
import styleable from 'react-styleable'
import {
  Page,
  Toolbar,
  List,
  ListItem
} from 'react-onsenui';
import css from './Menu.css'
import { getRouteList } from '../routes'

const menuItems = getRouteList()

@styleable(css)
export default class Menu extends React.Component {
  goTo(route) {
    const { navigator, onMenuItemClick, currentRouteId } = this.props;
    if (currentRouteId === route.id) {
      return;
    }
    navigator.resetPage(route)
    onMenuItemClick()
  }
  render() {
    const { css, currentRouteId } = this.props;
    return (
      <Page className={css.root}>
        <Toolbar inline>
          <div className="center">Menu</div>
        </Toolbar>
        <List className={css.menuList}
          renderRow={item => (
            <ListItem
              key={item.id}
              onClick={this.goTo.bind(this, item) }
              className={classnames(
                css.menuItem,
                { disabled: currentRouteId === item.id }
              ) }>
              {item.title}
            </ListItem>
          ) }
          dataSource={menuItems} />
      </Page>
    );
  }
}
