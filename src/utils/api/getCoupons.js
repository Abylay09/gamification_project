import axios from "axios"

const token = localStorage.getItem("token")

export const coupons = {
    getAllCoupons() {
        return axios.get("http://api.openskill.uz/store/all", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getMyCoupons(){
        return axios.get("http://api.openskill.uz/store/my", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getInfo(id){
        return axios.get("http://api.openskill.uz/store/offer", {
            params : {
                uid : id
            }, 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    }
}