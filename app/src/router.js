configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        main: { component: 'home' },
      },
    })
    .state('about', {
      url: '/about',
      views: {
        main: { component: 'about' },
      },
    });

  $urlRouterProvider.otherwise('/');

}
