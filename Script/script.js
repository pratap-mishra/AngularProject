//Creating module
var moduleName=angular.module("myModule",[]);

moduleName.controller("myController",function($scope){
    //creating a complex object 
    var employee={
        firstName:"Pratap",
        lastName:"Mishra",
        gender : "Male"
    };

    $scope.emp=employee;
});