import axios from '../axios';

export function getBlogData() {
    return axios.get('/api/blog');
}
export function getBlogClass() {
    return axios.get('/api/class');
}