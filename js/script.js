angular.module('myApp',['ngMessages'])
    .controller('WaitStaffController',['$scope', function($scope){

        $scope.TipTotal = 0;
        $scope.MealCount = 0;
        $scope.AverageMealPrice = 0;
        $scope.TipTotal = 0;
        $scope.submit = function() {
            $scope.UserForm.$submitted = true;
            var base_meal_price = Number($scope.BaseMealPrice);
            var tax = ($scope.TaxRate/100) + base_meal_price;
            var subtotal = (tax + base_meal_price);
            $scope.SubTotal = (base_meal_price+ tax);
            var tip = Number($scope.TipPercentage/100) * subtotal ;
            $scope.Tip = tip;
            $scope.Total = subtotal + tip;
            $scope.TipTotal = $scope.tip_total + tip;
            $scope.MealCount = $scope.meal_count+1;
            $scope.AverageMealPrice = $scope.tip_total/$scope.meal_count;
        }

        $scope.reset = function() {
            $scope.TipTotal = null;
            $scope.MealCount = null;
            $scope.AverageMealPrice = null;
            $scope.TipTotal = null;
            $scope.SubTotal = null;
            $scope.Tip = null;
            $scope.Total = null;
            $scope.BaseMealPrice = null;
            $scope.TaxRate = null;
            $scope.TipPercentage = null;
            $scope.UserForm.$submitted = false;
        }

        $scope.cancel = function() {
            $scope.BaseMealPrice = null;
            $scope.TaxRate = null;
            $scope.TipPercentage = null;
            $scope.UserForm.$submitted = false;


        }
    }]);
