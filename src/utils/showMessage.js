import style from './message.module.less';
import Icon from '../components/Icon/index.vue';
import getCompRootDom from './getCompRootDom';

export default function (options) {
    let type = options.type || 'success';
    let info = options.info || '';
    let wrap = options.wrap || document.body;

    const div = document.createElement('div');
    const showApp = getCompRootDom(Icon, {
        type
    })
    console.log(showApp);
    div.innerHTML = info;
    div.className = style.boxWrap;
    div.appendChild(showApp);
    div.classList.add(`${style[type]}`);

    wrap.appendChild(div);
}