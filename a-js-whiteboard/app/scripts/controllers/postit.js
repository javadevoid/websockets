'use strict';

/**
 * @ngdoc function
 * @name wbFloggitApp.controllers:MainCtrl
 * @name wbFloggitApp.controllers:CreatePostItCtrl
 * @name wbFloggitApp.controllers:EditPostItCtrl
 * @description
 * # MainCtrl (Main screen)
 * # CreatePostItCtrl
 * # EditPostItCtrl
 * Controllers of the wbFloggitApp
 */
angular.module('wbFloggitApp.controllers', [])
	.controller('MainCtrl', function ($scope, $location, WSPostItFactory) {

		$scope.$on('jsonArrayUpdates', function (event, jsonArray) {
			$scope.postIts = jsonArray;
			$scope.$digest();
		});

		$scope.removePostIt = function (postIt) {
			WSPostItFactory.sendingPostItToDelete(postIt);
		};

	})
	.controller('CreatePostItCtrl', function ($location, WSPostItFactory) {

		document.getElementById('infoSubmited').onclick = function () {
			WSPostItFactory.sendingPostItToCreate();
			$location.path('/main');
		};

	})
	.controller('EditPostItCtrl', function ($location, $routeParams, WSPostItFactory) {

		document.getElementById('infoSubmited').onclick = function () {
			WSPostItFactory.sendingPostItToUpdate(parseInt($routeParams.pid));
			$location.path('/main');
		};

	});