
// Application Declaration + UI Router Injection in array argument
var blocJamsModule = angular.module('blocJamsModule', ['ui.router']);

// Define a Controller & inject its dependencies
blocJamsModule.controller('MainController', function($scope) {
    $scope.someText = 'Hello World!';
    
});

// Provider used to configure & define default behavior
myAppModule.config(function($stateProvider, $locationProvider) {

    // Configure application's paths
    $locationProvider.html5Mode({
         // Hashbang Mode Disabled
         enabled: true,
         // Avoids a common $location error
         requireBase: false
     });

    // For this project, need to know how to configure at least four aspects of a state: its name, URL route, controller, and template.
    $stateProvider
        .state('landing', {
             url: '/',
             controller: 'Landing.controller',
             templateUrl: '/templates/landing.html'
         });

        .state('collection', {
             url: '/collection',
             controller: 'Collection.controller',
             templateUrl: '/templates/collection.html'
         });

        .state('album', {
             url: '/album',
             controller: 'Album.controller',
             templateUrl: '/templates/album.html'
         });
    
 });