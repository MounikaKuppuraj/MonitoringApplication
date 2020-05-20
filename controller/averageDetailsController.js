(function(){
    var averageDetailsController=function($scope,$http,$location){
        $scope.submit=function(){
        $scope.show=false;
        $http.get('http://localhost:8080/Monitoring_Rest/webapi/averagedetails/'+$scope.startdate+'/'+$scope.enddate)
        .then(successCallback,errorCallback);
            function successCallback(response){
                $scope.averageDetails=response.data;
                $scope.show=true;
            }
            function errorCallback(response){
                //handle errors
            }
            $scope.doSort=function(param){
                $scope.sortBy=param;
                $scope.reverse=!$scope.reverse;
            }
        }
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    }
    angular.module('monitoringApp').controller('averageDetailsController',averageDetailsController);
}());