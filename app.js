'use strict';

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
define(
  'app'
  ,[
    'angularjs'
  ]
  ,function TodoMVCApp(angularPlaceHolder /*angular is not a AMD module*/) {
    var angularModule = angular.module('todomvc', [])
        ,app = {}

    app.init = function init() {
      //using global angular var
      angular.bootstrap(document, ['todomvc']);
    }

    //make the "todomvc" (Angular) module available on the "app" (AMD) module
    app.__defineGetter__('todomvc', function() {return angularModule;})

    return app;
  }
);

