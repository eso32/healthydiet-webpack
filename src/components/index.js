module.exports = function(ngModule) {
  require('./chooseMenu/chooseMenu')(ngModule);
  require('./logo/logo')(ngModule);
  require('./updater/updater')(ngModule);
  require('./foodElement/foodElement')(ngModule);
};
