import axios from "axios";

const api = axios.create({
    baseURL: "https://themealslisting-1670461310310.azurewebsites.net",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    },

});

export default api;