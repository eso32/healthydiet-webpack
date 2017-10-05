const angular = require('angular');
const ngRoute = require('angular-route');
const ngModule = angular.module('healthydiet', ['ngRoute']);

require('./config.js')(ngModule);
require('./controllers')(ngModule);
require('./components')(ngModule);
require('./directives')(ngModule);
require('./services')(ngModule);

console.log('Webpack works!');
