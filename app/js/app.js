var blahgApp = angular.module('blahgApp', [
  'ui.router',
  'ui.bootstrap',
  'homeControllerModule',
  'postsControllerModule',
  'servicesModule',
  'filtersModule'
]);

blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'app/views/about.html'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'app/views/posts.html'
    })
    .state('new-post', {
      url: "/new-post",
      templateUrl: 'app/views/new.html'
    })
    .state('show', {
      url: '/posts/:id',
      templateUrl: 'app/views/show.html'
    });
  $urlRouterProvider.otherwise('/');
});
