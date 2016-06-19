import { combineReducers } from 'redux'
import isMenuOpen from './menu'
import currentRoute from './route'

export default combineReducers({
  isMenuOpen,
  currentRoute
})
