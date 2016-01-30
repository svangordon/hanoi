angular.module('app')
	.controller('clickController', ['$scope', 'clickFactory', function($scope, clickFactory) {
		$scope.click = clickFactory;
		$scope.setClick = function(index) {
			//console.log($scope.click.origin)
			if ($scope.click.origin === null) {
					$scope.click.origin = index;
				} else {
					$scope.click.destination = index;
				}
				//console.log('aqui',$scope.click.origin, $scope.click.destination)
				if ($scope.click.origin !== $scope.click.destination && $scope.click.destination!== null) {
					//console.log('MoveDisk('+$scope.click.origin+','+$scope.click.destination+')')
					$scope.click.moveDisk($scope.click.origin, $scope.click.destination);
					$scope.click.origin = null;
					$scope.click.destination = null;
				} else if ($scope.click.origin === $scope.click.destination) {
					//console.log('cancelled')
					$scope.click.origin = null;
					$scope.click.destination = null;
				}

		}
		
	}])