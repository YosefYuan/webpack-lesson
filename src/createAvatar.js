import avatar from './WechatIMG832.jpeg';

export default function createAvatar() {
  const img = new Image();
  img.src = avatar;
  img.classList.add('avatar');
  const root = document.getElementById('root');
  root.appendChild(img);

  console.log('avatar', avatar);
}
