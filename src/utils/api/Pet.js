import axios from "axios";



export const PetApi = {
    choosePet(petName) {
        const token = localStorage.getItem("token")
        return axios.post("http://api.openskill.uz/user/update", {
            pet: petName
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },
    getPet() {
        const token = localStorage.getItem("token")
        return axios.get("http://api.openskill.uz/user/me", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    }
}