import axios from '../axios';

export default function getProject() {
    return axios.get('/api/project');
}