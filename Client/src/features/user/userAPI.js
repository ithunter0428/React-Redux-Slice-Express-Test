import axios from "axios";

export async function getUser() {
    return axios.get(`http://localhost:8000/users/random`);
}
