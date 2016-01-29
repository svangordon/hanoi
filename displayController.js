

angular.module('app')
	.controller('displayController', ['$scope', 'towerData', function($scope, towerData) {
		$scope.diskWidthCoefficient = 50;
		$scope.diskWidthMinimum = 50;
		$scope.sizeUnit = 'px';
		$scope.baseHeight = 50;
		$scope.diskHeight = 50;

		$scope.getDiskWidth = function(diskSize) {
			return diskSize * $scope.diskWidthCoefficient + $scope.diskWidthMinimum + $scope.sizeUnit;
		}
		$scope.getDiskHeight = function(index) {
			return index * $scope.diskHeight + $scope.baseHeight +$scope.sizeUnit;
		}
		$scope.posts = towerData.posts
		console.log($scope.posts)
	}])




