import * as actionTypes from '../actions/actionTypes';
import { InitialStatePostsProps } from '../propsTypes/propsTypes';

const initialState: InitialStatePostsProps = {
    posts: [{
        id: 0,
        title: '',
        body: ''
    }]
}

function postReducer(state = initialState, action: any) {
    if (action.type === actionTypes.ADD_POST) {
        const newPost = [{
            id: Math.random() + 1,
            title: action.payload.title,
            body: action.payload.body
        }]
        return {
            ...state,
            posts: state.posts.concat(newPost)
        }
    }

    if (action.type === actionTypes.REMOVE_POST) {
        return {
            ...state,
            posts: state.posts.filter((post) => post.id !== action.payload.id)
        }
    }

    return state;

}

export default postReducer;