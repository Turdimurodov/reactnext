import { getUsers } from "../../Api"
import { dispatch } from "./Store";
import { SET_ERROR, SET_LOADING, SET_USERS } from "./Types";

export const setUsers = async () => {
    setLoading(true)
    const res = await getUsers();
    setLoading(false)
    if (res.success) {
        const action = { type: SET_USERS, payload: res.data };
        dispatch(action);
    }else {
        setError(true)
    }
}


const setLoading = () => {
    dispatch({ type: SET_LOADING })
}
const setError = () => {
    dispatch({ type: SET_ERROR })
}