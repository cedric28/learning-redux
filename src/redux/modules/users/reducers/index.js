import initialState from '../state';

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_USERS':
            return {
                ...state,
                users: [...action.payload]
            }
        case 'DELETE_USER':
                return {
                    ...state,
                    users: state.users.filter(user => user.id !== action.payload)
                }
        default:
            return state;
    }
};


export default usersReducer;