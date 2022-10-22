import axios from "axios";

export const restore = {
    sendCode: (login) => {
        return axios.post("http://api.openskill.uz/user/restore", {
            login: login,
            step: 1
        })
    },
    checkCode: ({ login, sms }) => {
        return axios.post("http://api.openskill.uz/user/restore", {
            login: login,
            step: 2,
            code: sms
        })
    },
    changePassword: ({ login, password }) => {
        return axios.post("http://api.openskill.uz/user/restore", {
            login: login, 
            step: 3, 
            password: password,
        })
    }
}

