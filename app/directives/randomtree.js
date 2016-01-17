(function() {
    'use strict';

    angular
        .module('mpApp')
        .directive('randomtree', function ($compile) {
            return {
                restrict: 'EA',
                replace: false,
                link: function ($scope, elem, attr) {
                    $scope.sizes = [
                        "fa fa-tree fa-2x",
                        "fa fa-tree fa-x",
                        "fa fa-tree fa-3x",
                        "fa fa-tree fa-4x"
                    ];

                    $scope.colors = [
                        "#587F39",
                        "#435833",
                        "#455F37",
                        "#3F692C"
                    ];            
                    elem.addClass($scope.sizes[Math.floor(Math.random() * ($scope.sizes.length))]);
                    elem.css( "color", $scope.colors[Math.floor(Math.random() * ($scope.colors.length))]);
                }            
            };
        });

   

})();
