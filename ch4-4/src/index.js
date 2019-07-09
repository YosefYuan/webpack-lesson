// import test from './test.js'
// console.log(test.name);

import _ from 'lodash'
import $ from 'jquery'

var ele = document.createElement('div');
ele.innerHTML = _.join(['yosef', 'yuan'], '-');

document.body.appendChild(ele);

// function getComponent() {
//   // return import( /* webpackChunkName:"lodash" */ 'lodash').then(({
//   //   default: _
//   // }) => {
//   var element = document.createElement('div');
//   element.innerHTML = _.join(['Yosef', 'Yuan'], '-');
//   // return element;
//   return new Promise((resolve, reject) => {
//     return resolve(element);
//   })
//   // })
// }
// getComponent().then((element) => {
//   document.body.appendChild(element);
// })