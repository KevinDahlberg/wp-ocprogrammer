import fetch from 'isomorphic-fetch'

const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const initialState = {
    categories: []
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

/** Fetch Functions */
function fetchCategoriesIfNeeded() {
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
        default:
            return state
    }
}

export default categoryReducer