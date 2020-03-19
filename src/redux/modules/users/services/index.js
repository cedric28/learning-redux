import { httpClient } from "../../../../helpers"

const fetchUsersService = async () => {
    const payload = await httpClient({
        url: '/users',
        method: 'GET'
    });

    return payload.data.data;
}

const deleteUserService = async id => {
    await httpClient({
        url: `/users/${id}`,
        method: 'DELETE'
    });

    return id;
}


export { fetchUsersService, deleteUserService };