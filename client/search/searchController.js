angular.module('Shuttr.search', ['SearchServices'])

.controller('SearchController', ['$scope', 'SearchFactory',
 function($scope, SearchFactory) {

  $scope.pictures

  $scope.getPictures = function(location) {

    SearchFactory.getAllPictures(location)
    .then(function(response) {
      $scope.pictures = response.data.photos.photo;
      console.log($scope.pictures);
    })

  }

}])