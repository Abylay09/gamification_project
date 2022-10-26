import axios from "axios"
export const User = {
    getMyInfo() {
        const token = localStorage.getItem("token");
        return axios.get("http://api.openskill.uz/user/me", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data)
    },
    changeUserInfo(info) {
        const token = localStorage.getItem("token");
        return axios.post("http://api.openskill.uz/user/update", info, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    getAnotherUser(id) {
        const token = localStorage.getItem("token");
        return axios.get("http://api.openskill.uz/user/user", {
            params: {
                uid: id
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => res.data)

    }
}