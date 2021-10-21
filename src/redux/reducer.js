import { createForms } from "react-redux-form";
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";
import { InitialContactForm } from "./forms";

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.dishesLoading:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.loadDishes:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default: return dishState;
    }
}

const commentReducer = (commentState = { comments: [] }, action) => {
    switch (action.type) {

        case actionTypes.LOAD_COMMENTS:
            return {
                ...commentState,
                isLoading: false,
                comments: action.payload
            };

        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: []
            };

        case actionTypes.addComment:
            return {
                ...commentState,
                comments: commentState.comments.concat(action.payload)
            }

        default: return commentState;
    }
}

const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: InitialContactForm,
    })
})

export default Reducer;