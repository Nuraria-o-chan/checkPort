import axios from "axios";

const instance = axios.create({
    baseURL: "https://testjob.checkport.ru",
});

export default instance;