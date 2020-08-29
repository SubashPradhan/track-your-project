import { NAVBAR_SCROLL } from '../actions/navbar'

export default function (state = null, action={}) {
  switch (action.type) {
    case NAVBAR_SCROLL:
      return action.payload
    default:
      return state
  }
}