angular.module('app')
	.controller('solveController', ['$scope', 'solveFactory', '$interval', function($scope, solveFactory, $interval) {
		$scope.solve = solveFactory;
		$scope.interval;
		$scope.click = function() {
			$scope.interval = $interval(function(){$scope.solve.interativeSolve($scope.solve.step); $scope.solve.step = ($scope.solve.step + 1) % 3; console.log($scope.solve.step)}, 500)
		}
		
	}])