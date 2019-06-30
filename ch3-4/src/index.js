import testjpg from './test.jpg';
import './index.scss';

var img = new Image();
img.src = testjpg;
img.classList.add('avatar');

var root = document.getElementById('root');
root.append(img);