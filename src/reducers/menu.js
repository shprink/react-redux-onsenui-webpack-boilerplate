import {
  MENU_TOGGLE,
  MENU_OPEN,
  MENU_CLOSE
} from '../actions/menu'

const initState = false

export default (state = initState, action) => {
  switch (action.type) {
    case MENU_TOGGLE: {
      return !state
    }
    case MENU_OPEN: {
      return true
    }
    case MENU_CLOSE: {
      return false
    }
    default: {
      return state
    }
  }
}
