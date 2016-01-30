

angular.module('app')
	.controller('displayController', ['$scope', 'towerDataFactory', function($scope, towerDataFactory) {
		$scope.diskWidthCoefficient = 50;
		$scope.diskWidthMinimum = 75;
		$scope.sizeUnit = 'px';
		$scope.baseHeight = 50;
		$scope.diskHeight = 50;
		$scope.baseWidth = 300;
		$scope.spokeHeight = 250;
		$scope.colors = ['#2ecc71','#3498db', '#e74c3c', '#f1c40f', '#d35400', '#8E44AD', '#E74C3C', '#95A5A6', '#D35400', '#16A085' ];
		$scope.posts = towerDataFactory.posts;
		$scope.data = towerDataFactory;

		$scope.getDiskWidth = function(diskSize) {
			return diskSize * (($scope.baseWidth - $scope.diskWidthMinimum) / towerDataFactory.diskNum) + $scope.diskWidthMinimum + $scope.sizeUnit;
		}
		$scope.getDiskYPosition = function(index) {
			return index * ($scope.spokeHeight / towerDataFactory.diskNum) + $scope.baseHeight +$scope.sizeUnit;
		}
		$scope.getDiskXPosition = function(diskSize) {
			var diskWidth = $scope.getDiskWidth(diskSize);
			diskWidth = diskWidth.split("");
			diskWidth.pop();
			diskWidth.pop();
			diskWidth = diskWidth.join('')*1;
			console.log(diskWidth);
			return ($scope.baseWidth - diskWidth)/ 2 + $scope.sizeUnit;
		}
		$scope.getDiskHeight = function() {
			return ($scope.spokeHeight / towerDataFactory.diskNum) + $scope.sizeUnit;
		}
		
		console.log(towerDataFactory.posts);

	}])




