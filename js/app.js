var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers']);
phonecatApp.config(['$routeProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
        otherwise({
            redirectTo: '/phones'
        });
    }
]);
