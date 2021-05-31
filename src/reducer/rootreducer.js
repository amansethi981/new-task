// ** Redux Imports
import { combineReducers } from 'redux'
import book from '../books/Store/reducer/index'
const rootReducer = combineReducers({
  book
})

export default rootReducer
