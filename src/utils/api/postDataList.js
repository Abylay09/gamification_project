import axios from "axios";


export const postDataList = {
    checkTask(answer) {
        const token = localStorage.getItem("token");
        return axios.post("http://195.49.212.191:8779/lessons/check-task", answer, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => result.data)
    }
}