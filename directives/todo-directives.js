/**
 * @author btilford
 * 8/4/12 8:49 PM
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
  'directives/todo-directives'
  ,['app']
  ,function todoDirectiveModule(app) {
    var blur,focus;

    blur = app.todomvc.directive('todoBlur', function() {
      return function blurDirective( scope, elem, attrs ) {
        elem.bind('blur', function() {
          scope.$apply(attrs.todoBlur);
        });
      };
    });

    focus = app.todomvc.directive('todoFocus', function( $timeout ) {
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

    return {blur:blur, focus:focus};
  }
)