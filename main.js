(function(){
   angular.module('testApp',['pikaday']);
   angular.module('testApp').controller('pikaController',['$scope',function($scope){
        $scope.name ="Integration of pikaday time"
    }])
    
})();