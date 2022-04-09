import style from './message.module.less';
console.log(style);
export default function (options) {
    let type = options.type || 'success';
    let info = options.info || '';
    let wrap = options.wrap || document.body;

    const div = document.createElement('div');
    div.innerHTML = info;
    div.className = style.boxWrap;
    div.classList.add(`${style[type]}`);

    wrap.appendChild(div);
}