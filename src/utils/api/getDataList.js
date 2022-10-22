import axios from "axios"

const token = localStorage.getItem("token");

export const getDataList = {
    getLessonsGroup(id) {
        return axios.get("http://api.openskill.uz/lessons/lessons-group/", {
            params: {
                uid: id ? id : ""
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getLecture(id) {
        return axios.get("http://api.openskill.uz/lessons/lesson/", {
            params: {
                uid: id || ""
            },
            headers: {
                'Authorization': `Basic ${token}`
            }
        }).then(result => result.data)
    },

    getTask(id) {
        return axios.get("http://api.openskill.uz/lessons/task", {
            params: {
                uid: id
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
}
