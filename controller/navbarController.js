(function(){
    var navbarController=function($scope,monitoringFactory){
        $scope.isActive=function(viewLocation){
            console.log(viewLocation);
        }
    }
    angular.module('monitoringApp').controller('navbarController',navbarController);
}());
