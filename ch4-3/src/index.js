function getComponent() {
  return import( /* webpackChunkName:"lodash" */ 'lodash').then(({
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