export const MENU_OPEN = 'MENU_OPEN'
export const MENU_CLOSE = 'MENU_CLOSE'
export const MENU_TOGGLE = 'MENU_TOGGLE'

export const openMenu = () => {
  return {
    type: MENU_OPEN
  }
}

export const closeMenu = () => {
  return {
    type: MENU_CLOSE
  }
}

export const toggleMenu = () => {
  return {
    type: MENU_TOGGLE
  }
}
