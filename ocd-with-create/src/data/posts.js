import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const initialState = {
  posts: []
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

export function fetchPosts () {
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



function postReducer (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts}
    default:
      return state
  }
}

export default postReducer
