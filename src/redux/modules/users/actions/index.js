import { fetchUsersService, deleteUserService } from "../services"

const fetchUsersAction = (users) => {
    return {
        type: 'GET_USERS',
        payload: users
    }
}


const deleteUserAction = id => {
    return {
        type: 'DELETE_USER',
        payload: id
    }
}


const fetchUsers = () => {
    return async dispatch => {
        const payload = await fetchUsersService();
        dispatch(fetchUsersAction(payload));
    }
}


const deleteUser = id => {
    return async dispatch => {
        await deleteUserService(id);
        dispatch(deleteUserAction(id));
    }
}

export { fetchUsers, deleteUser };