//Creating module
var moduleName=angular.module("myModule",[]);

moduleName.controller("myController",function($scope){
    //creating a complex object 
    var employee=[
       { firstName:"Pratap",lastName:"Mishra",gender : "Male",sal:"20990"},
       { firstName:"Rahul",lastName:"Jain",gender : "Male",sal:"30990"},
       { firstName:"Ranjan",lastName:"Bhatia",gender : "Male",sal:"40990"}
    ];

    $scope.emp=employee;
});