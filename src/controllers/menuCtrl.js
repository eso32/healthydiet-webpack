module.exports = function(ngModule) {
  require('./menuCtrl.scss');
  const items = require('../../items.json');

  ngModule.controller('menuCtrl', ['fetchData', '$scope', function(fetchData, $scope){
    var vm = this;
    this.visible = [false, false, false];
    this.searchText = '';
    this.temp = {
      day: '',
      food: '',
      time: ''
    }
    this.setvisible = function(type){
      this.visible[type] = this.visible[type] == true ? false : true;
    };
    this.orders = {
      pon: {snia: '', obiad: '', kola: ''},
      wt: {snia: '', obiad: '', kola: ''},
      sr: {snia: '', obiad: '', kola: ''},
      czw: {snia: '', obiad: '', kola: ''},
      pt: {snia: '', obiad: '', kola: ''}
    };

    // fetchData.then(function(data) {
    //   vm.items = data;
    // });

    this.items = items;

    this.setOrder = function(temp){
      if(temp[0] === 'all'){
        for(let day in this.orders){
          this.orders[day][temp[2]] = temp[1];
        }
      } else {
        this.orders[temp[0]][temp[2]] = temp[1];
      }
    }
    $scope.$on('ADD_TODO', (event, title, description) => {
        console.log('ADD_TODO generated');
      });

  }])
}
