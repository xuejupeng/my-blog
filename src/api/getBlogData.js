import axios from '../axios';

export function getBlogData(page = 1, limit = 10) {
    return axios.get('/api/blog', {
        params: {
            page,
            limit
        }
    });
}
export function getBlogClass() {
    return axios.get('/api/class');
}

export function getBlogDetail(id) {
    return axios.get('/api/blog/id', {
        params: {
            id
        }
    })
}