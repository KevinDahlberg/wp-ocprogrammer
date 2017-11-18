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

/**
 * @function fetchCategoriesIfNeeded
 * @desc checks to see if categories have populated, if the haven't, gets them
 */
export function fetchCategoriesIfNeeded() {
    return (dispatch, getState) => {
        if(shouldFetchCategories(getState())){
            return dispatch(fetchCategories)
        }
    }
}

/**
 * @function shouldFetchCategories
 * @desc true/false function to figure out if the category object has populated
 */
function shouldFetchCategories(state) {
    const categories = state.categoryReducer.categories;
    console.log('state in should fetch Categories ', state)
    if (categories.length === 0) {
        return true
    } else {
        return false
    }
}

/**
 * @function fetchCategories
 * @desc fetches all of the categories
 */
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

/**
 * @function filterCategoryPosts
 * @desc filters the posts related to a particular category
 */
export function filterCategoryPosts(categoryName, posts, categoryArray) {
    console.log('category name ', categoryName, ' posts, ', posts, ' categoryArray ', categoryArray)
    const currentCategory = categoryArray.filter((cat) => {
        return cat.slug === categoryName
    })
    console.log('current category', currentCategory)

    const categoryPosts = posts.filter((post) => {return post.categoryID === categoryName.ID})
}

/** Reducer */
function categoryReducer(state = initialState, action) {
    console.log('action is', action)
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