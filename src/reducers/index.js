import {combineReducers} from 'redux'
import menuClicked from './menuClicked'
import showModal from './showModal'
import signup from './handleSignup'

export default combineReducers({
  menuClicked,
  showModal,
  signup
})