import {SCROLL_HEIGHT} from '../actions/getScrollHeight'

export default function(state = {}, action = {}) {
  switch (action.type) {
    case SCROLL_HEIGHT:
      return action.payload
    default:
      return state
  }
}