import Home from './pages/Home'
import About from './pages/About'
import LongList from './pages/LongList'

export const initialRouteId = 'home'
export const Routes = {
  home: { component: Home, title: 'Home', id: 'home' },
  about: { component: About, title: 'About', id: 'about' },
  longList: { component: LongList, title: 'Long list', id: 'longList' }
}

export const getRoute = id => Routes[id];
export const getRouteList = () => Object.keys(Routes).map(key => Routes[key]);
export const getInitialRoute = () => getRoute(initialRouteId)
