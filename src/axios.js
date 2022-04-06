import axios from 'axios';

const instance = axios.create();

// instance.interceptors.request.use((res) => res);
// instance.interceptors.response.use(res => console.log(res))

export default instance;