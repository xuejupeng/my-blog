import {
    createApp
} from 'vue';

export default function getCompRootDom(Comp, props) {
    const showApp = createApp(Comp, props);
    showApp.mount();
    return showApp;
}