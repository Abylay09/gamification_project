import axios from "axios"

export const login = {
    auth({login, password}) {
        return axios.post("http://195.49.212.191:8779/user/signin", {
            login : login,
            password : password
        })
    }
}