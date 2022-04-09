import axios from '../axios';

export function getComment() {
    return axios.get('/api/message');
}