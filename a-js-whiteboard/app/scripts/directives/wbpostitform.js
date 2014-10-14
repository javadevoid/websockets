'use strict';

/**
 * @ngdoc directive
 * @name wbFloggitApp.directive:wbPostItForm
 * @description
 * # wbPostItForm
 */
angular.module('wbFloggitApp')
	.directive('wbPostItForm', function () {
		return {
			template: '<div class="form-group">' +
				'<label for="subject">Subject</label>' +
				'<input name="subject" type="text" ng-model="postIt.subject" class="form-control" id="subject" placeholder ="Subject"/>' +
				'</div>' +
				'<div class="form-group">' +
				'<label for="info">Info</label>' +
				'<input name="info" type="textbox" ng-model="postIt.info" class="form-control" id="info" placeholder ="Info"/>' +
				'</div>' +
				'<div>' +
				'<label>Color</label>' +
				'</div>' +
				'<div class="form-group">' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="red"/> red' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="yellow"/> yellow' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="blue"/> blue' +
				'</label>' +
				'<label class="radio-inline">' +
				'<input name="color" type="radio" ng-model="postIt.color" value="green"/> green' +
				'</label>' +
				'</div>' +
				'<div class="form-group">' +
				'<div><input type="submit" class="btn btn-primary" id="infoSubmited" value="Submit" onclick="getColor()"/></div>' +
				'</div>',
			restrict: 'E'
		};
	});