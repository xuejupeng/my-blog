import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router/index';
import './assets/less/global.less';

createApp(App).use(router).mount('#app');