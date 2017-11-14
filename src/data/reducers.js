import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import postReducer from './posts'
import pageReducer from './pages'
import categoryReducer from './categories'

const rootReducer = combineReducers({
  pageReducer,
  postReducer,
  categoryReducer,
  routing: routerReducer
})

export default rootReducer
