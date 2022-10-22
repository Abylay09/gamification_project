import axios from "axios"

export const login = {
    auth({login, password}) {
        return axios.post("http://api.openskill.uz/user/signin", {
            login : login,
            password : password
        })
    }
}