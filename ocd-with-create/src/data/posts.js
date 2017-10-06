import fetch from 'isomorphic-fetch'

export const POSTS = 'POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const initialState = {
  posts: []
}

export function posts (postArray) {
  return {
    type: POSTS,
    posts: postArray
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
  fetch('http://theocdcoder.com/wp-json/wp/v2/posts', init)
    .then(response => response.json())
    .then(json => receivePosts(json))
}

function postReducer (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.posts}
    case RECEIVE_POSTS:
      return { ...state, posts: action.posts}
    default:
      return state
  }
}

export default postReducer
