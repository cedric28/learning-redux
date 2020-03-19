const fetchPostsAction = posts => {
    return {
        type: 'FETCH_POSTS',
        payload: posts
    };
};


const fetchPosts = () => {
    return async dispatch => {
        await dispatch(fetchPostsAction([]));
    }
}

export { fetchPosts };