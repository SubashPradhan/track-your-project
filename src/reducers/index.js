import {combineReducers} from 'redux'
import menuClicked from './menuClicked'
import scrollHeight from './getScrollHeight'

export default combineReducers({
  menuClicked,
  scrollHeight
})