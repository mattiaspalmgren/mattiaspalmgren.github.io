(function() {
    'use strict';

    angular
        .module('mpApp')
        .controller('mainController', mainController);


    function mainController($scope, $http) {

        $http.get('data.json').success(function(data) {
          $scope.projects = data;
        }).then(function(){

        	console.log($scope.projects);
        });
    }
})();
