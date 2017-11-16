import fetch from 'isomorphic-fetch'

const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

const initialState = {
    categories: [],
    currentCategoryPosts: []
}

/** Actions */
function requestCategories() {
    return {
        type: REQUEST_CATEGORIES
    }
}

function receiveCategories(categoryArray) {
    console.log('category array is ', categoryArray)
    return {
        type: RECEIVE_CATEGORIES,
        categories: categoryArray
    }
}

function setSelectedCategory(categoryArray) {
    return {
        type: SET_SELECTED_CATEGORY,
        currentCategoryPosts: categoryArray
    }
}

/** Fetch Functions */
export function fetchCategoriesIfNeeded() {
    return (dispatch, getState) => {
        if(shouldFetchCategories(getState())){
            return dispatch(fetchCategories)
        }
    }
}

function shouldFetchCategories(state) {
    const categories = state.categoryReducer.categories;
    if (categories.length === 0) {
        return true
    } else {
        return false
    }
}

function fetchCategories() {
    const init = {
        method: 'GET'
    }
    return dispatch => {
        dispatch(requestCategories())
        fetch('http://theocdcoder.com/wp-json/wp/v2/categories', init)
        .then(response => response.json())
        .then(json => dispatch(receiveCategories(json)))
    }
}

function filterCategory(state, categoryName) {
    const posts = state.postReducer.posts
    const categoryPosts = posts.filter((post) => {return post.categoryID === categoryName.ID})
}

/** Reducer */
function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return state
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                currentCategoryPosts: action.currentCategoryPosts
            }
        default:
            return state
    }
}

export default categoryReducer