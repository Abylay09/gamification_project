import axios from "axios";
const token = localStorage.getItem("token");

export const postDataList = {
    checkTask(answer) {
        return axios.post("http://api.openskill.uz/lessons/check-task", answer, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    }
}