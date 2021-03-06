export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('repo', {
      url: '/repo/:owner/:id',
      templateUrl: 'app/repo/repo.html',
      controller: 'RepoController',
      controllerAs: 'repo',
      resolve: {
        repository: ['$stateParams', 'GithubService', ($stateParams, GithubService) => {
          return GithubService
            .findRepositoryByName($stateParams.owner, $stateParams.id);
        }]
      }
    });


  $urlRouterProvider.otherwise('/');
}
