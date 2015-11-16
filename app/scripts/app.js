
// Application Declaration + UI Router Injection in array argument
var blocJamsModule = angular.module('blocJamsModule', ['ui.router']);

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
    $stateProvider.state('album', {
         url: '/album',
         controller: 'Album.controller',
         templateUrl: '/templates/album.html'
     });
    
 });