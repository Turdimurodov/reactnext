import axios from "axios";

export const getUsers = async () => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return { success: true, data: res.data };
    } catch (error) {
        console.log("UserError");
    }
}