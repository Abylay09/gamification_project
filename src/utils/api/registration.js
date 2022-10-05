import axios from "axios";

export const registration = {
    signup(userInfo) {
        return  axios.post("http://195.49.212.191:8779/user/signup", userInfo)
    },
    checkCode(userInfo){
        return  axios.post("http://195.49.212.191:8779/user/check-code", userInfo)
    },
    updateCode(userInfo){
        return axios.post("http://195.49.212.191:8779/user/update-code ", userInfo)
    }
}