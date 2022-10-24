import axios from "axios";


export const postDataList = {
    checkTask(answer) {
        const token = localStorage.getItem("token");
        return axios.post("http://api.openskill.uz/lessons/check-task", answer, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    }
}