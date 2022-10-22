import axios from "axios";

export const registration = {
    signup(userInfo) {
        return  axios.post("http://api.openskill.uz/user/signup", userInfo)
    },
    checkCode(userInfo){
        return  axios.post("http://api.openskill.uz/user/check-code", userInfo)
    },
    updateCode(userInfo){
        return axios.post("http://api.openskill.uz/user/update-code ", userInfo)
    }
}