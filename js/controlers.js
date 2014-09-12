var madianol = angular.module('madianol', []);
madianol.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [{
        'name': 'Nexus S1',
        'snippet': 'Fast just got faster with Nexus S.',
        'age': 1
    }, {
        'name': 'Motorola XOOM™ with Wi-Fi3',
        'snippet': 'The Next, Next Generation tablet.',
        'age': 3
    }, {
        'name': 'MOTOROLA XOOM™2',
        'snippet': 'The Next, Next Generation tablet.',
        'age': 2
    }];

    $scope.orderProp = "age";
});
