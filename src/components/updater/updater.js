module.exports = function(ngModule) {
  require('./updater.scss');

  ngModule.component('updater', {
    restrict: 'E',
    bindings: {
      amount: '@',
      increase: '&'
    },
    template: `
      <br/>This is your amount {{$ctrl.amount}}
      <button ng-click="$ctrl.increase()">Inside increase</button>
    `,
    controller: function(){
      // this.loadImage = function(image) {
      //     return require('../../assets/'+image);
      // };
    }
  })
}
