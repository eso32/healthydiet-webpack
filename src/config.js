module.exports = function(ngModule) {
  ngModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        template: require('./views/main.html'),
        controller: 'mainCtrl',
        controllerAs: 'main'
      })
      .when('/menu', {
        template: require('./views/menu.html'),
        controller: 'menuCtrl',
        controllerAs: 'menu'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
}
