'use strict';

define(
  'services/todoStorage'
  ,[
    'app'
  ]
  ,function storageModule(app) {
    /**
     * Services that persists and retrieves TODOs from localStorage.
     */
    var service = app.todomvc.factory( 'todoStorage', function() {
      var STORAGE_ID = 'todos-angularjs';

      return {
        get: function() {
          return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        put: function( todos ) {
          localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        }
      };
    });

    return service;
  }
);