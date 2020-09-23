import { HANDLE_SIGNUP } from '../actions/handleSignup'

export default function (state = null, action = {}) {
  switch (action.type) {
    case HANDLE_SIGNUP:
      return !state
    default:
      return state
  }
}