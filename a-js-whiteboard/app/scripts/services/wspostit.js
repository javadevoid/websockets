'use strict';

/**
 * @ngdoc service
 * @name wbFloggitApp.WSPostItFactory
 * @description
 * # WSPostItFactory
 * Factory in the wbFloggitApp.
 */

angular.module('wbFloggitApp').factory('WSPostItFactory', function ($rootScope) {

  var port = '8080';
  var wsUrl = 'ws://127.0.0.1:' + port + '/whiteboard' + '/postit';
  var ws = new WebSocket(wsUrl);

  var jsonArray = [];

  ws.onopen = function () {

    console.log('websocket connected');

  };

  ws.onmessage = function (messageFromBackEnd) {

    jsonArray = JSON.parse(messageFromBackEnd.data);

    console.log('message back from backend: ');
    console.log(jsonArray);

    $rootScope.$broadcast('jsonArrayUpdates', jsonArray);

  };

  ws.onerror = function (error) {

    console.log('WebSocket Error: ' + error);

  };

  ws.onclose = function (event) {

    console.log('Remote host closed or refused WebSocket connection');
    console.log('Event: ' + event);

  };

  return {

    sendingPostItToCreate: function () {

      var subject = document.getElementById('subject').value;
      var info = document.getElementById('info').value;

      function getColor() {
        var colors = document.getElementsByName('color');
        for (var i in colors) {
          if (colors[i].checked) {
            return colors[i].value;
          }
        }
        return null;
      }

      var jsonObjCreate = {
        'id': 0,
        'service': 'create',
        'subject': subject,
        'info': info,
        'color': getColor()
      };

      ws.send(JSON.stringify(jsonObjCreate));

      console.log('-----------------------------------');
      console.log('Json object sent to create post it:');
      console.log(jsonObjCreate);

    },

    sendingPostItToDelete: function (postIt) {

      var jsonObjDelete = {
        'id': postIt.id,
        'service': 'delete',
        'subject': '',
        'info': '',
        'color': ''
      };

      ws.send(JSON.stringify(jsonObjDelete));

      console.log('-----------------------------------');
      console.log('Json object sent to delete post it:');
      console.log(jsonObjDelete);

    },

    sendingPostItToUpdate: function (postItId) {

      var subject = document.getElementById('subject').value;
      var info = document.getElementById('info').value;

      function getColor() {
        var colors = document.getElementsByName('color');
        for (var i in colors) {
          if (colors[i].checked) {
            return colors[i].value;
          }
        }
        return null;
      }

      var jsonObjUpdate = {
        'id': postItId,
        'service': 'update',
        'subject': subject,
        'info': info,
        'color': getColor()
      };

      ws.send(JSON.stringify(jsonObjUpdate));

      console.log('-----------------------------------');
      console.log('Json object sent to update post it:');
      console.log(jsonObjUpdate);

    }

  };

});