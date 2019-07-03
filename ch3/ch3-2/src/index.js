import testjpg from './test.jpg';

var img = new Image();
img.src = testjpg;

var root = document.getElementById('root');
root.append(img);