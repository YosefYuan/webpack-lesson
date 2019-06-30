import testjpg from './test.jpg';
import style from './index.scss';

function createAvatar() {
    var img = new Image();
    img.src = testjpg;
    img.classList.add(style.avatar);

    var root = document.getElementById('root');
    root.append(img);
}

export default createAvatar;