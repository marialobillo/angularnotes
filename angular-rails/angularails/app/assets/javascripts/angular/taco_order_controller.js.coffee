AngularRails.controller "TacoOrderController", ($scope) ->
  $scope.tacos = []
  $scope.taco = {}

  $scope.clear = () ->
    $scope.taco = {}

  $scope.addTaco = () ->
    $scope.tacos.push($scope.taco)

  $scope.clear()

  
