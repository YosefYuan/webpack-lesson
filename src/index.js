import avatar from './WechatIMG832.jpeg';
import style from './index.scss';
import createAvatar from './createAvatar';

createAvatar();
const img = new Image();
img.src = avatar;
img.classList.add(style.avatar);
const root = document.getElementById('root');
root.appendChild(img);

console.log('avatar', avatar);
