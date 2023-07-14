import router from '@/router'
import axios from 'axios';
const instance = axios.create({
    baseURL:  "http://45.12.239.156:8081/api"
  });
  
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        router.push('/auth');
      }
      return Promise.reject(error);
    }
  );
  
  export default instance;
  