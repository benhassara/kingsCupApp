(function() {
    'use strict';

    angular.module('app.components.devCard')
        .directive('devCard', devCardDirective);

    function devCardDirective() {
        return {
            restrict: 'E',
            scope: {dev: '='},
            templateUrl: 'app/components/devCard/devCard.html'
        };
    }
})();
