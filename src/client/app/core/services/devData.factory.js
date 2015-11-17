(function() {
    'use strict';

    angular.module('app.core.services')
        .factory('devData', devDataFactory);

    function devDataFactory() {
        var factory = {};

        var devs = [
            {
                name: 'Ben Hassara',
                picture: 'https://avatars1.githubusercontent.com/u/12945733',
                motto: 'stuff and things',
                github: 'https://github.com/benhassara'
            },
            {
                name: 'Alex Prout',
                picture: 'https://avatars0.githubusercontent.com/u/9564321',
                motto: 'blah blah blah',
                github: 'https://github.com/aprout'
            },
            {
                name: 'Rob Hajek',
                picture: 'https://avatars3.githubusercontent.com/u/11345219',
                motto: 'blah blah blah',
                github: 'https://github.com/robhaj'
            },
            {
                name: 'Luis De La Pena',
                picture: 'https://avatars3.githubusercontent.com/u/12971444',
                motto: 'blah blah blah',
                github: 'https://github.com/delapena89'
            },
        ];

        factory.getDevs = function() {
            return devs;
        };

        return factory;
    }
})();
