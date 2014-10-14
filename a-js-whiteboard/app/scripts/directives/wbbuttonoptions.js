'use strict';

/**
 * @ngdoc directive
 * @name wbFloggitApp.directive:wbButtonOptions
 * @description
 * # wbButtonOptions
 */
angular.module('wbFloggitApp')
	.directive('wbButtonOptions', function () {
		return {
			template: '<ul class="nav nav-pills pull-right">' +
				'<li><a ng-href="#/main">Whiteboard</a></li>' +
				'<li><a ng-href="#/add-post-it"><span class="glyphicon glyphicon-pushpin"></span> Add a post-it!</a></li>' +
				'</ul>',
			restrict: 'E'
		};
	});