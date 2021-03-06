// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controller'])

.run(function($ionicPlatform,$cordovaNativeAudio) {
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
        .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
            $stateProvider
            .state('tab',{
            url:'/tabs',
            abstract:true,
            templateUrl:'template/tabs.html'
          })
            .state('tab.my',{
            url:'/my',
              views:{
                'myView':{
                 templateUrl:'template/my.html',
                 controller:'versionCtrl'
                }    
              }
           })
           .state('tab.course',{
            url:'/course',
              views:{
                'courseView':{
                 templateUrl:'template/course.html',
                 controller:'imageCtrl'
                }    
              }
           })
           .state('tab.community',{
            url:'/community',
              views:{
                'communityView':{
                 templateUrl:'template/community.html',
                 controller:'menuCtrl'
                }    
              }
           })
            .state('enter',{
                url:'/enter',
                templateUrl:'template/enter.html',
           })
           .state('reg',{
                url:'/reg',
                templateUrl:'template/reg.html',
                controller:'regCtrl'
           })

           $ionicConfigProvider.tabs.position("bottom");
           $urlRouterProvider.otherwise('/enter');
        })
        .controller('imageCtrl',function($scope,$interval){
           $scope.i=1;
           $interval(function(){
               $scope.i=$scope.i+1;
               if($scope.i==4){
                   $scope.i=1;
               }
            },2000);
        })
   
