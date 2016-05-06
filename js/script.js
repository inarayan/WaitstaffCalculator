angular.module('myApp',['ngMessages'])
    .controller('WaitStaffController',['$scope', function($scope){

        $scope.TipTotal = null;
        $scope.MealCount = null;
        $scope.AverageMealTip = null;
        $scope.TipTotal = null;
        $scope.submit = function() {
            $scope.UserForm.$submitted = true;
            var base_meal_price = Number($scope.BaseMealPrice);
            var tax = ($scope.TaxRate/100) + base_meal_price;
            var subtotal = (tax + base_meal_price);
            $scope.SubTotal = (base_meal_price+ tax);
            var tip = Number($scope.TipPercentage/100) * subtotal ;
            $scope.Tip = tip;
            $scope.Total = subtotal + tip;
            $scope.TipTotal = $scope.TipTotal + tip;
            $scope.MealCount = $scope.MealCount+1;
            $scope.AverageMealTip = $scope.TipTotal/$scope.MealCount;
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
