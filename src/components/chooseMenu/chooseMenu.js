module.exports = function(ngModule) {
  require('./chooseMenu.scss');

  ngModule.component('chooseMenu', {
    restrict: 'E',
    bindings: {
      visible: '<',
      setvisible: '&',
      searchText: '='
    },
    template: require('./chooseMenu.html'),
    controller: function($scope){
      this.$scope = $scope;
      this.title = 'lol';
      this.description= 'some text';
      this.showChange = () => {
        console.log('Changed!');
      }
    }
  })
}
