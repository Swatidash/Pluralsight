/// <reference path="../app.html" />
angular.module("sportsStoreAdmin")
.constant("authUrl", function ($scope, $http, $location, authUrl) {

    $scope.authentication = function (user, pass) {
        $http.post(authUrl, {
            username: user,
            password: pass
        }, {
            withCredentials: true
        }).success(function (data) {
            $location.path("/main");
        }).error(function (error) {
            $scope.authentication = error;
        });
    }
})
.controller("mainCtrl", function ($scope) {

    $scope.screens = ["Products", "Orders"];
    $scope.current = $scope.screens[0];

    $scope.setScreen = function (index) {
        $scope.current = $scope.screens[index];
    };

    $scope.getScreen = function () {
        return $scope.current == "Products"
          ? "/views/adminProducts.html" : "/views/adminOrders.html";
    };
})
.controller("orderCtrl", function ($scope, $http, orderUrl) {

    $http.get(orderUrl, { withCredentials: true })
    .success(function (data) {
        $scope.orders = data;
    })
    .error(function (error) {
        $scope.error = error;
    });

    $scope.selectedOrder;

    $scope.selectedOrder = order;
});

$scope.calcTotal = function (order) {
    var total = 0;
    for (var i = 0; i < order.products.length; i++) {
        total +=
            order.products[i].count * order.products[i].price;
    }
    return total;

    }

});
 