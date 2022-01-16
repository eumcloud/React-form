const ADD_POST = 'post/ADD_POST';

let nextId = 1;
export const addPost = (text) => ({
    type: ADD_POST,
    post: {
        id: nextId++,
        text
    }
});

const initialState = [];

export default function posts(state=initialState, action) {
    switch(action.type) {
        case ADD_POST:
            return state.concat(action.post);
        default:
            return state;
    }
}