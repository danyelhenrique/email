import axios from "axios";

const baseURL =
    "http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/";

const api = axios.create({
    baseURL,
});

export default api;
