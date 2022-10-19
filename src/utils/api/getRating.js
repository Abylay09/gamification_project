import axios from "axios"
const token = localStorage.getItem("token");

export const rating = {
    getRating(){
        return axios.get("http://api.openskill.uz/user/rating", {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getIndicatorsRating(){
        return axios.get("http://api.openskill.uz/indicators/rating", {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    }
}