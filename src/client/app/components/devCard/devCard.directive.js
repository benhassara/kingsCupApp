(function() {
    'use strict';

    angular.module('app.components.devCard')
        .directive('devCard', devCardDirective);

    function devCardDirective() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/components/devCard/devCard.html'
        };
    }
})();
