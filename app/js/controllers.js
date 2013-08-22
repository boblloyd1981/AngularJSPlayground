'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function($scope) {
        console.log('Hello');
		$scope.myValue = "myValue";
  }])
  .controller('MyCtrl2', [function() {

  }]);