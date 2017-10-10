import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const DISPLAY_POST = 'DISPLAY_POST'

const initialState = {
  posts: [],
  currentPost: {}
}

export function requestPosts () {
  return {
    type: REQUEST_POSTS,
  }
}

function receivePosts(json) {
  console.log(json);
  return {
    type: RECEIVE_POSTS,
    posts: json
  }
}

export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())){
      return dispatch(fetchPosts())
    }
  }
}

export function shouldFetchPosts(state) {
  const posts = state.posts
  if (!posts) {
    return true
  } else {
    return false
  }
}

export function fetchPosts () {
  console.log('fetch posts called');
  const init = {
    method: 'GET'
  }
  return dispatch => {
    dispatch(requestPosts())
      fetch('http://theocdcoder.com/wp-json/wp/v2/posts?_embed=true', init)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)))
  }
}

export function checkPostArray(postName){
  return ( dispatch, getState ) => {
    if (shouldFetchPosts(getState())){
      console.log('check is true');
      dispatch(fetchPosts(), filterPosts(getState(), postName))
    } else {
      console.log('check is false');
      dispatch(filterPosts(getState(), postName))
    }
  }
}

function filterPosts(state, postName){
  console.log('State: ', state, ' PostName: ', postName);
}

export function displayPost (postName) {
  return {
    type: DISPLAY_POST,
    postName
  }
}


function postReducer (state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts}
    case DISPLAY_POST:
      return {
        ...state,
        currentPost: state.postArray
      }
    default:
      return state
  }
}

export default postReducer
