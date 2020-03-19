import initialState from '../state';

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            };
        default: 
            return state;
    }
}

export default postReducer;