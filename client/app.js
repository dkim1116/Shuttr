angular.module("Shuttr", ['ui.router',
  'Shuttr.main',
  'Shuttr.search',
  'Shuttr.login'
])

.config(['$stateProvider','$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

    .state('main', {
      url: '/main',
      templateUrl: '/main/main.html',
      controller: 'MainController'
    })

    .state('search', {
      url:'/search',
      templateUrl: 'search/search.html',
      controller: 'SearchController'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'login/login.html',
      controller: 'LoginController'
    })
    
}])
