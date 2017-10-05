module.exports = function(ngModule) {
  require('./foodElement.scss');
  // require('./foodElement2.css');

  ngModule.component('foodElement', {
    restrict: 'E',
    bindings: {
      searchText: '=',
      item: '<',
      setOrder: '&'
    },
    template: require('./foodElement.html'),
    controller: function(){
      this.temp = ['','',''];

      this.setDay = (day, food) => {
        this.temp[0] = day;
        this.temp[1] = food;
      }

      this.setTime = (time) => {
        this.temp[2] = time;
        this.setOrder({temp: this.temp});
      }
    }
  })
}
