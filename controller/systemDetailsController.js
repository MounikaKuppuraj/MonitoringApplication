(function(){
    var systemDetailsController=function($scope,$http,monitoringFactory){
        $scope.submit=function(){
            console.log($scope.startdate);
            console.log($scope.enddate);
            $scope.show=false;
            $http.get('http://localhost:8080/Monitoring_Rest/webapi/systemdetails/'+$scope.startdate+'/'+$scope.enddate)
            .then(successCallback,errorCallback);
            function successCallback(response){
                monitoringFactory.prepForBroadcast(response.data);
                $scope.systemDetails=monitoringFactory.systemDetails;
                $scope.object=monitoringFactory.object;
                console.log($scope.systemDetails);
            }
            function errorCallback(response){
                //handle errors
            }
            $scope.doSort=function(param){
                $scope.sortBy=param;
                $scope.reverse=!$scope.reverse;
            }
        }
    }
    angular.module('monitoringApp').controller('systemDetailsController',systemDetailsController);
}());
angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('a1'), ['monitoringApp']);
});