import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setUsers } from "../Redux/Action/UsersAction";

const Users = () => {
    useEffect(() => {
        setUsers()
    }, []);
    const data = useSelector(state => state.UsersReducer.usersdata);
    const loading = useSelector(state => state.UsersReducer.loading);
    const error = useSelector(state => state.UsersReducer.error);
    console.log(data);
    return (
        <div>
            {
                loading && "Loading" || error && "Error" || data.length > 0 && <table className={"table"}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>UserName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(v => <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.username}</td>
                        </tr>)}
                    </tbody>
                </table> || "No data"
            }

        </div>
    )
}
export default Users;
