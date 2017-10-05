module.exports = function(ngModule) {

  ngModule.directive('curtainsControl', function () {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var curtain = angular.element(element.children()[0]);
            var days = angular.element(element.children()[1]);
            var meals = angular.element(element.children()[2]);

              element.on('mouseenter', function(){
                curtain.removeClass('animate-down');
                days.removeClass('animate-down');
                meals.removeClass('animate-down');
                curtain.addClass('animate');
                element.on('mouseleave', function(){
                  curtain.addClass('animate-down');
                  curtain.removeClass('animate');
                })
              })
              curtain.on('click', function(){
                curtain.addClass('animate-down');
                days.addClass('animate');
                element.on('mouseleave', function(){
                  // days.addClass('animate-down');
                  days.removeClass('animate');
                })
              })
              days.on('click', function(){
                days.removeClass('animate');
                days.addClass('animate-down');
                meals.addClass('animate');
                element.on('mouseleave', function(){
                  // days.addClass('animate-down');
                  meals.removeClass('animate');
                })
              })
              meals.on('click', function(){
                meals.removeClass('animate');
                meals.addClass('animate-down');
              })

            }
        };
    })
}
