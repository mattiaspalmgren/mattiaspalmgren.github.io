(function() {
    'use strict';

    angular
        .module('mpApp')
        .directive('forest', function ($compile) {
            return {
                restrict: 'EA',
                replace: false,
                template: '<i ng-repeat="i in range(nr)" randomtree></i>',
                scope: {
                    nr: "="
                },
                link: function ($scope, elem, attr) {
                    
                    $scope.range = function(max) {
                            var range = [];
                            for (var i = 0; i < max; i++) {
                                range.push(i);
                            }
                            return range;
                        };
                }            
            };
        });

   

})();
