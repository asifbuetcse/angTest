animeSquadThreads.config(['$routeProvider', function config($routeProvider) {
  $routeProvider.when('/', {
    controller: 'ThreadsController',
    template: '<p>This is my Home</p>'
  });
}]);



animeSquadThreads.controller('ThreadsController', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});