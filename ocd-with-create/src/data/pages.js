import fetch from 'isomorphic-fetch'

const REQUEST_SINGLE_PAGE = 'REQUEST_SINGLE_PAGE'
const RECEIVE_SINGLE_PAGE = 'RECEIVE_SINGLE_PAGE'


const initialState = {
  currentPage: []
}

/** ACTIONS **/

function requestSinglePage(){
  return {type: REQUEST_SINGLE_PAGE}
}

function receiveSinglePage(json){
  return {type: RECEIVE_SINGLE_PAGE, currentPage: json}
}

function shouldFetchSinglePage(state, pageName) {
  const page = state.pageReducer.currentPage
  if (page.slug === pageName) {
    return false
  } else {
    return true
  }
}

export function fetchPageIfNeeded(pageName) {
  return(dispatch, getState) => {
    if (shouldFetchSinglePage(getState())) {
      return dispatch(fetchSinglePage(pageName))
    }
  }
}

function fetchSinglePage(pageName) {
  const init = {
    method: 'GET'
  }
  const url = 'http://theocdcoder.com/wp-json/wp/v2/pages?=slug=' + pageName
  return dispatch => {
    fetch(url, init)
    .then(response => response.json())
    .then(json => dispatch(receiveSinglePage(json)))
  }
}

/** REDUCER **/

function pageReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SINGLE_PAGE:
      return state
    case RECEIVE_SINGLE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    default:
      return state
  }
}

export default pageReducer
