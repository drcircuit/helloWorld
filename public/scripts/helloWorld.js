/**
 * Created by Espen on 2/10/2016.
 */
angular.module('helloWorld',[])
.controller('theController', ['$scope',function ($scope){
    $scope.page = {
        title:'Hello World! Angular Style!',
        message:'Hello World!',
        description: 'Probably the narrowest $scope in Angular history...',
        author:'Working Class Hacker'

    };
}]);