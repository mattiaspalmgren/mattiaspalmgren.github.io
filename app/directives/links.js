(function() {
    'use strict';

    angular
        .module('mpApp')
        .directive('links', function ($compile) {
            return {
                restrict: 'E',
                template: '<li><a title={{href}} href={{href}} target="blank"> <i class="fa fa-{{icon}} fa-3x"> </i></a></li>',
                replace: true,
                scope: {
                    href: "@",
                    icon: "@"
                }
            };
        });

   

})();
