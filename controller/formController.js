(function(){
    var formController=function($scope,monitoringFactory){
        $scope.submit=function(){
            console.log($scope.startdate);
            console.log($scope.enddate);
            monitoringFactory.prepForBroadcast($scope.startdate,$scope.enddate);
        }
    }
    angular.module('monitoringApp').controller('formController',formController);
}());
