import _ from 'lodash';
import $ from 'jquery';

const dom = $('<div>');

dom.html(_.join(['Yosef', 'Yuan'], '_'));

$('body').append(dom);