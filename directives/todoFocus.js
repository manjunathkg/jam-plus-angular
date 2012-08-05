'use strict';

define(
  'directives/todoFocus'
  ,[
    'app'
  ]
  ,function todoFocusModule(app) {
    /**
     * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
     */
    var directive = app.todomvc.directive('todoFocus', function( $timeout ) {
      return function( scope, elem, attrs ) {
        scope.$watch(attrs.todoFocus, function( newval ) {
          if ( newval ) {
            $timeout(function() {
              elem[0].focus();
            }, 0, false);
          }
        });
      };
    });

    return directive;

  }
)

