/// <reference path="../app.html" />


app.controller('sportsStoreCtrl', [$scope, $http, $location,
    function ($scope, $http, $location) {
        $scope.data = [];
 
        function getData() {
            $http({
                method: "GET",
                url: "http://localhost:5500/products",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*'
                }
            }).then(function (response) {
                //set response json studentlist
                $scope.data = response.data;
            });
        };

        getData();
    
]);
