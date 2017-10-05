module.exports = function(ngModule) {
  ngModule.factory('fetchData', ['$http', function($http) {
    return $http({
    method: 'GET',
    url: 'items.json',
    headers: {
        'Content-Type': 'application/json'
      }
    }).then(function successCallback(response) {
        return response.data;
      }, function errorCallback(response) {
        console.log('Error occured '+response.status);
      });
  }]);
}
