import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addComment = (dishId, author, rating, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }

    newComment.date = new Date().toISOString();

    axios.post('http://localhost:3001/comments', newComment)
        .then(response => console.log(response.data))
        .then(comments => {
            dispatch({
                type: actionTypes.addComment,
                payload: newComment
            })
        })
}


export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})


export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})


export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get('http://localhost:3001/comments')
        .then(response => response.data)
        .then(comments => dispatch(loadComments(comments)))

}

export const loadDishes = dishes => ({
    type: actionTypes.loadDishes,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.dishesLoading,
})

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading());
    axios.get('http://localhost:3001/dishes')
        .then(response => response.data)
        .then(dishes => dispatch(loadDishes(dishes)));
}