//Creating module
var moduleName=angular.module("myModule",[]);

moduleName.controller("myController",function($scope){
    var country=[
       {
            name:"India",
        city:[
            {name:"Mumbai"},
             {name:"Goa"},
              {name:"Pune"},
               {name:"Bangalore"}
        ]
       },
       {
        name:"USA",
        city:[
             {name:"Washington D.C"},
              {name:"Veghus"},
            { name:"San Franscico"}
            ]
       },
       
       {
        name:"UK",
        city:[
             {name:"London"},
              {name:"Gabba"},
            { name:"Maxico"}
            ]
       }
    ];

    $scope.country=country;
});