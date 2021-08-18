import { types } from '../type/types';


const initialState = {
    comment: []
}

export const forumReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addComment:
            return {
                ...state,
                comment: [action.payload, ...state.comment]
            }
        default:
            return state;
    }

}