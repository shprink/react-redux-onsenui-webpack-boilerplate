import React from 'react'
import { connect } from 'react-redux'
import { openMenu, closeMenu } from '../actions/menu'
import { setRoute } from '../actions/route'
import {
  Navigator as OnsNavigator,
  Splitter,
  SplitterSide,
  SplitterContent
} from 'react-onsenui';
import Menu from '../pages/Menu'
import { getInitialRoute } from '../routes'

const mapStateToProps = state => {
  return {
    isOpen: state.isMenuOpen,
    currentRoute: state.currentRoute
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openMenu: () => dispatch(openMenu()),
    closeMenu: () => dispatch(closeMenu()),
    setRoute: id => dispatch(setRoute(id))
  }
}

const initialRoute = getInitialRoute()

export default class Navigator extends React.Component {
  navigator = null; // This is a hack in order to pass the navigator to the side menu component
  renderPage = (route, navigator) => {
    this.navigator = navigator;
    this.props.setRoute(route.id)
    return (
      <route.component navigator={navigator} {...route} />
    );
  }
  render() {
    const { openMenu, closeMenu, isOpen, currentRoute } = this.props;
    return (
      <Splitter>
        <SplitterSide
          side="left"
          isOpen={isOpen}
          onClose={closeMenu}
          onOpen={openMenu}
          width={240}
          collapse={true}
          isSwipeable={true}>
          <Menu
            navigator={this.navigator}
            onMenuItemClick={closeMenu}
            currentRouteId={currentRoute} />
        </SplitterSide>
        <SplitterContent>
          <OnsNavigator
            initialRoute={initialRoute}
            renderPage={this.renderPage}
            />
        </SplitterContent>
      </Splitter>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
