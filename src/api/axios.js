import axios from "axios";
// import { getCookie } from "../shared/Cookie";
// 1. Axios instance생성
export const api = axios.create({
    baseURL: "http://localhost:3001/"
})

// 2. request interceptor
api.interceptors.request.use(
    config => {
        // const token = getCookie("token");
        // config.headers.Authorization = token;
        return config;
    },
    error => {
        console.log(error);
    }
)

// 3. response interceptor
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error);
    }
);


// copy, paste haha....
const apis = {
  //user
  user_show: async () => await api.get('/userList'),
  user_idChk: async (id) => await api.get(`/userList/?user_id=${id}`),
  user_join: async (user) => await api.post('/userList', user)
};

export default apis;