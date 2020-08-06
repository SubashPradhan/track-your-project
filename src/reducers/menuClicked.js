import { MENU_CLICKED } from '../actions/menuClicked'

export default function (state = false, action = {}) {
  switch (action.type) {
    case MENU_CLICKED:
      return !state
    default:
      return state
  }
}