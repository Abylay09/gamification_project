import axios from "axios"



export const coupons = {
    getAllCoupons() {
        const token = localStorage.getItem("token")
        return axios.get("http://api.openskill.uz/store/all", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getMyCoupons(){
        const token = localStorage.getItem("token")
        return axios.get("http://api.openskill.uz/store/my", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getInfo(id){
        const token = localStorage.getItem("token")
        return axios.get("http://api.openskill.uz/store/offer", {
            params : {
                uid : id
            }, 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    buyTickets({id, amount}){
        const token = localStorage.getItem("token")
        return axios.post("http://api.openskill.uz/store/buy",{
            uid : id,
            amount : amount
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }
}