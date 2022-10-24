import axios from "axios"



export const getDataList = {
    getLessonsGroup(id) {
        const token = localStorage.getItem("token");
        return axios.get("http://195.49.212.191:8779/lessons/lessons-group/", {
            params: {
                uid: id ? id : "11870796-3253-11ed-a261-0242ac120002"
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
    getLecture(id) {
        const token = localStorage.getItem("token");
        return axios.get("http://195.49.212.191:8779/lessons/lesson/", {
            params: {
                uid: id || "89ee46c4-842e-4615-abac-ae60086b80d6"
            },
            headers: {
                'Authorization': `Basic ${token}`
            }
        }).then(result => result.data)
    },

    getTask(id) {
        const token = localStorage.getItem("token");
        return axios.get("http://195.49.212.191:8779/lessons/task", {
            params: {
                uid: id
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    },
}
