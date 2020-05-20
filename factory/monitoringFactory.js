(function(){
    var monitoringFactory=function($rootScope){
        var factory={};
        factory.systemDetails=null;
        factory.object='';
        factory.prepForBroadcast=function(data){
            this.systemDetails=data;
            this.object='Hello';
        }
        return factory;
    }
    angular.module('monitoringApp').factory("monitoringFactory",monitoringFactory);
}())