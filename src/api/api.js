import axios from "axios";

const api = axios.create({
    baseURL:"https://api-dev.akov-developpement.fr/",
});

export default api;