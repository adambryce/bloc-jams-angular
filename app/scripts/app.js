
// Application Declaration + UI Router Injection in array argument
var blocJamsModule = angular.module('blocJamsModule', ['ui.router']);

// Define a Controller & inject its dependencies
blocJamsModule.controller('LandingController', function($scope) {
    $scope.mainTagline = "Turn the Music Up!";
    
});

// Define a Controller & inject its dependencies
blocJamsModule.controller('CollectionController', function($scope) {
    $scope.someText = 'Collection Page';
    
    
    
});


// Define a Controller & inject its dependencies
blocJamsModule.controller('AlbumController', function($scope) {
    $scope.someText = 'Album Page';
    
});


// Provider used to configure & define default behavior
blocJamsModule.config(function($stateProvider, $locationProvider) {

    // Configure application's paths
    $locationProvider.html5Mode({
         // Hashbang Mode Disabled
         enabled: true,
         // Avoids a common $location error
         requireBase: false
     });

    // For this project, need to know how to configure at least four aspects of a state: its name, URL route, controller, and template.
    $stateProvider
        .state('parent', {
             url: '/home',
             abstract: '.index',
             template: '<ui-view/>'
         })
        .state('parent.index', {
             url: '',
             controller: 'LandingController',
             templateUrl: '../templates/landing.html'
         })

        .state('collection', {
             url: '/collection',
             controller: 'CollectionController',
             templateUrl: '../templates/collection.html'
         })

        .state('album', {
             url: '/album',
             controller: 'AlbumController',
             templateUrl: '../templates/album.html'
         })
    
 });