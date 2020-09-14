import {SHOW_MODAL} from '../actions/showModal'

export default function (state = false, action = {}) {
  switch (action.type) {
    case SHOW_MODAL:
      return !state
    default:
      return state
  }
}