import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const DISPLAY_POST = 'DISPLAY_POST'
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST'

//sets initial state for the App
const initialState = {
  posts: [],
  currentPost: {},
  isFetching: false
}

/**
 * ACTIONS
 */

/**
 * @function requestPosts
 * @desc action that sets isFetching to true
 */
export function requestPosts() {
  return {type: REQUEST_POSTS, isFetching: true}
}

/**
 * @function receivePosts
 * @desc action that sets the posts array and changes isFetching to false
 */
function receivePosts(json) {
  console.log(json);
  return {type: RECEIVE_POSTS, posts: json, isFetching: false}
}

/**
 * @function receiveSinglePost
 * @desc sets the currentPost
 */
function receiveSinglePost(json) {
  console.log(json);
  return {type: RECEIVE_SINGLE_POST, currentPost: json}
}

export function displayPost(postName) {
  return {type: DISPLAY_POST, postName}
}

/**
 * ACTION FUNCTIONS
 */

/**
 * @function fetchPostsIfNeeded
 * @desc evaluates shouldFetchPosts and if it comes out as true, fetches posts
 */
export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts())
    }
  }
}

/**
 * @function shouldFetchPosts
 * @desc evaluates whether or not there are posts
 * @return true if there are no posts, false if there are posts
 */
export function shouldFetchPosts(state) {
  const posts = state.posts
  if (!posts) {
    return true
  } else {
    return false
  }
}

/**
 * @function fetchPosts
 * @desc fetches posts from the db
 */
export function fetchPosts() {
  console.log('fetch posts called');
  const init = {
    method: 'GET'
  }
  return dispatch => {
    dispatch(requestPosts())
    fetch('http://theocdcoder.com/wp-json/wp/v2/posts?_embed=true', init).then(response => response.json()).then(json => dispatch(receivePosts(json)))
  }
}

/**
 * @function shouldFetchSinglePosts
 * @desc evaluates whether there are posts (which might not happen after a refresh)
 * if there aren't posts, fetches single post based on post name, then calls fetchposts,
 * if there are, calls filterSinglePost
 */
export function shouldFetchSinglePosts(postName) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      dispatch(fetchSinglePost(postName), fetchPosts())
    }
  } else {
    dispatch(filterSinglePost(getState(), postName))
  }
}

/**
 * @function getSinglePost
 * @desc gets a single post from the db
 */
export function fetchSinglePost(postName) {
  const init = {
    method: 'GET'
  }
  const url = 'http://theocdcoder.com/wp-json/wp/v2/posts/' + postName
  return dispatch => {
    fetch(url, init)
  }
}

/**
 * @function filterSinglePost
 * @desc filters out a single post the postArray in state
 */
export function filterSinglePost(state, postName) {
  const posts = state.postArray
  const singlePost = posts.filter((post.title) => {return post.title !== postName})
  return dispatch => {
    dispatch(receiveSinglePost(singlePost))
  }
}

function filterPosts(state, postName) {
  console.log('State: ', state, ' PostName: ', postName);
}

/**
 * REDUCER
 */

function postReducer(state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts
      }
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
