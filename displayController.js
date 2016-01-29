

angular.module('app')
	.controller('displayController', ['$scope', 'towerData', function($scope, towerData) {
		$scope.diskWidthCoefficient = 50;
		$scope.diskWidthMinimum = 50;
		$scope.sizeUnit = 'px';
		$scope.baseHeight = 50;
		$scope.diskHeight = 50;
		$scope.baseWidth = 300;
		$scope.colors = ['#2ecc71','#3498db', '#e74c3c', '#f1c40f', '#d35400' ];
		$scope.posts = towerData.posts;

		$scope.getDiskWidth = function(diskSize) {
			return diskSize * $scope.diskWidthCoefficient + $scope.diskWidthMinimum + $scope.sizeUnit;
		}
		$scope.getDiskHeight = function(index) {
			return index * $scope.diskHeight + $scope.baseHeight +$scope.sizeUnit;
		}
		$scope.getDiskPosition = function(diskSize) {
			return ($scope.baseWidth - (diskSize * $scope.diskWidthCoefficient + $scope.diskWidthMinimum))/ 2 + $scope.sizeUnit;
		}
		
		//console.log($scope.posts[0].contents[]);

	}])




