import axios from "axios";
import { useDispatch } from 'react-redux';
import { authActions } from '../Redux/auth.slice';


axios.defaults.baseURL = "http://localhost:8000/api/"
axios.defaults.withCredentials = true

let refresh = false;

axios.interceptors.response.use(resp => resp, async error =>{
    if (error.response.status === 401 && !refresh){
        refresh = true;
        const response = await axios.post('refresh-token');

        if(response.status === 200){
            localStorage.setItem('access-token', JSON.stringify(response.data.token));
            return axios(error.config);
        }
        else{
            const dispatch = useDispatch();
            localStorage.removeItem('auth');
            dispatch(authActions.setAuth(false))
          }
    }
    refresh = false;

    return error;
})

axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('admin-access-token')
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;  // for Django and Spring Boot back-end
        // config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );