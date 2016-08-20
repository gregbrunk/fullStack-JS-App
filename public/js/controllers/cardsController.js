angular.module('CardsAgainstAssembly')
  .controller('CardsIndexController', CardsIndexController)
  .controller('CardsShowController', CardsShowController);

CardsIndexController.$inject = ['$scope','$http'];
function CardsIndexController($scope, $http){
  $http.get("http://localhost:3000/api/cards")
    .then(function(response){ $scope.cards = response.data; });
}

CardsShowController.$inject = ['$scope','$http','$location'];
function CardsShowController($scope, $http, $location) {
  var path = $location.absUrl();
  var split = path.split('/');
  var id = split[split.length-1];
  $http.get("http://localhost:3000/api/cards/" + id)
    .then(function(response){ $scope.card = response.data; });
}