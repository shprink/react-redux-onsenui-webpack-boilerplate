import {
  ROUTE_SET,
  ROUTE_CLEANUP
} from '../actions/route'

const initState = null

export default (state = initState, action) => {
  switch (action.type) {
    case ROUTE_SET: {
      return action.routeId
    }
    case ROUTE_CLEANUP: {
      return initState
    }
    default: {
      return state
    }
  }
}
