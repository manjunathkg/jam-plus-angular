'use strict';

define(
  'directives/todoBlur'
  ,[
    'app'
  ]
  ,function todoBlurModule(app) {
    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    var directive = app.todomvc.directive('todoBlur', function() {
      return function blurDirective( scope, elem, attrs ) {
        elem.bind('blur', function() {
          scope.$apply(attrs.todoBlur);
        });
      };
    });

    return directive;
  }
);

