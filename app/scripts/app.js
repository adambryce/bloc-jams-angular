
// Application Declaration + UI Router Injection in array argument
var blocJamsModule = angular.module('blocJamsModule', ['ui.router']);


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
        .state('landing', {
             url: '/',
             controller: 'LandingController',
             templateUrl: 'app/templates/landing.html'
         })

        .state('collection', {
             url: '/collection',
             controller: 'CollectionController',
             templateUrl: 'app/templates/collection.html'
         })

        .state('album', {
             url: '/album',
             controller: 'AlbumController',
             templateUrl: 'app/templates/album.html'
         })
    
 });

// Landing Controller & its dependencies
blocJamsModule.controller('LandingController', function($scope) {
    $scope.mainTagline = "Turn the Music Up!";
    
});



// Collection Controller & its dependencies
blocJamsModule.controller('CollectionController', function($scope, $log) {
    
var albumCatalog = albumPicasso;

    
var albumCollection = function(number) {
    var albumsList = [];
    for (var i = 0; i <= number; i++) {
        albumsList.push(angular.copy(albumCatalog));
        }        
        return albumsList;
    }  

    $scope.albumsInfo = albumCollection(11);
});




// Album Controller & its dependencies
blocJamsModule.controller('AlbumController', function($scope, $log) {
    $scope.albumsInfo = albumsArray;
    $scope.albums = albumsArray.listings[0];
});