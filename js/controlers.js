var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', function($scope, $http) {
    $http.get('/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $http.get('/json/tags.json').success(function(data) {
        $scope.tags = data;
    });
    $scope.orderProp = "age";
});
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.phoneId = $routeParams.phoneId;
    }
])
