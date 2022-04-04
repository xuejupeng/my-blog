import Home from '../views/Home/index.vue';
import About from '../views/About/index.vue';
import Blog from '../views/Blog/index.vue';
import Project from '../views/Project/index.vue';
import Message from '../views/Message/index.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/project',
        name: 'Project',
        component: Project
    },
    {
        path: '/blog/:id*',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/message',
        name: 'Message',
        component: Message
    },
]

export default routes;