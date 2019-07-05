import _ from 'lodash'

function getComponent() {
  // return import( /* webpackChunkName:"lodash" */ 'lodash').then(({
  //   default: _
  // }) => {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Yosef', 'Yuan'], '-');
  // return element;
  return new Promise((resolve, reject) => {
    return resolve(element);
  })
  // })
}
getComponent().then((element) => {
  document.body.appendChild(element);
})