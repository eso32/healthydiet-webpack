module.exports = function(ngModule) {
  require('./logo.scss');

  ngModule.component('logo', {
    restrict: 'E',
    template: require('./logo.html'),
    controller: function(){
    }
  })
}
