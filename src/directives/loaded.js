module.exports = function(ngModule) {

  ngModule.directive('loaded', function () {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
              element.addClass('animate')
            }
        };
    })
}
