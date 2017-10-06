import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import postReducer from './posts'

const rootReducer = combineReducers({
  postReducer,
  routing: routerReducer
})

export default rootReducer
