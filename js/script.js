angular.module('myApp',[])
    .controller('myCtrl',['$scope', function($scope){

        $scope.tip_total=0;
        $scope.meal_count=0;
        $scope.average_meal_tip=0;
        $scope.tiptotal=0;

        $scope.submit=function()

        {
            var base_meal_price=Number($scope.base_meal_price);
            var tax=($scope.tax_rate/100) + base_meal_price;
            var subtotal=(tax + base_meal_price);
            $scope.subtotal=(base_meal_price+ tax);
            var tip=Number($scope.tip_percentage/100) * subtotal ;
            $scope.tip=tip;
            $scope.total=subtotal + tip;
            $scope.tip_total=$scope.tip_total + tip;
            $scope.meal_count=$scope.meal_count+1;
            $scope.average_meal_tip=$scope.tip_total/$scope.meal_count;

        }

        $scope.reset=function()
        {
            $scope.tip_total=undefined;
            $scope.meal_count=undefined;
            $scope.average_meal_tip=undefined;
            $scope.tiptotal=undefined;
            $scope.subtotal=undefined;
            $scope.tip=undefined;
            $scope.total=undefined;
            $scope.base_meal_price=undefined;
            $scope.tax_rate=undefined;
            $scope.tip_percentage=undefined;


        }

        $scope.cancel=function()
        {
            $scope.base_meal_price=undefined;
            $scope.tax_rate=undefined;
            $scope.tip_percentage=undefined;

        }



    }]);
