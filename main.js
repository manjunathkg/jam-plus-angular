/**
 * @author btilford
 * 8/4/12 8:00 PM
 * @version 1.0.0
 * @since
 * @namespace
 * @exports
 * @requires
 *
 * @description
 *
 *
 */
'use-strict';

define(
  'main'
  ,[
    'app'
    ,'controllers/todoCtrl'
    ,'directives/todoBlur'
    ,'directives/todoFocus'
    ,'services/todoStorage'
  ]
  ,function mainModule(todomvc) {


    todomvc.init();
  }
)