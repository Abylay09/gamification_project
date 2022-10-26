import axios from "axios"

export const Rating = {
    getRating() {
        const token = localStorage.getItem("token");
        return axios.get("http://api.openskill.uz/user/rating", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getIndicatorsRating() {
        const token = localStorage.getItem("token");
        return axios.get("http://api.openskill.uz/indicators/rating", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getMyIndicator() {
        const token = localStorage.getItem("token");
        return axios.get("http://api.openskill.uz/indicators/myindicators", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    }
}