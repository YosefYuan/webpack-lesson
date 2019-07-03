// import _ from 'lodash';

// console.log(_.join(['d', 'd', 'cs'], '---'));

function getComponent() {
  return import('lodash').then(({
    default: _
  }) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Yosef', 'Yuan'], '-');
    return element;
  })
}
getComponent().then((element) => {
  document.body.appendChild(element);
})