export const POSTS = 'POSTS'

const initialState = {
  posts: []
}

export function posts (postArray) {
  return {
    type: POSTS,
    posts: postArray
  }
}

function postReducer (state = initialState, action) {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.posts}
    default:
      return state
  }
}

export default postReducer
