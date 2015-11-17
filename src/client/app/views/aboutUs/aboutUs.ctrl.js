(function() {
    'use strict';

    angular.module('app')
        .controller('AboutUsCtrl', AboutUsCtrl);

    AboutUsCtrl.$inject = ['devData'];

    function AboutUsCtrl(devData) {
        var vm = this;

        vm.devs = devData.getDevs();
    }
})();
