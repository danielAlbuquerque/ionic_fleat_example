// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui-leaflet'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("mapController", function($scope, $http, leafletData){

  angular.extend($scope, {
            areas_sig: {
                lat: 0.0333,
                lng: -51.05,
                zoom: 7
            },
            defaults: {
                scrollWheelZoom: false
            }
        });

 $http.get('data/areas_sig.geojson.bkp').success(function(geojson){
    angular.extend($scope, {
        geojson: {
            data: geojson,
            style: {
                fillColor: "green",
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
            }
        }
    });
  }).catch(function(err){
    console.log("Erro ao carregar geojson");
  });
 



})