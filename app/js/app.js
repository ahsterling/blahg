var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'homeControllerModule'
]);

blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: '../views/home.html'
    })
  .state('about', {
    url: '/about',
    templateUrl: '../views/about.html'
  })
  $urlRouterProvider.otherwise('/home');
});
