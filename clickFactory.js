angular.module('app')
	.factory('clickFactory', ['towerDataFactory',function(towerDataFactory){
		var clickOrigin = null;
		var clickDestination = null;
		return {
				origin : clickOrigin,
				destination : clickDestination,
		
			// setClick : function(index) {
			// 	if (!this.click.origin) {
			// 		this.click.origin = index;
			// 	} else {
			// 		this.click.destination = index;
			// 	}
			// 	if (this.click.origin !== this.click.destination) {
			// 		this.moveDisk(this.click.origin, this.click.destination);
			// 	}
			// 	this.click.origin = null;
			// 	this.click.destination = null;
			// },
			moveDisk : function(origin, destination) {
				//console.log(towerDataFactory);
				//console.log(arguments)
				var destinationIndex = destination;
				destination = towerDataFactory.posts[destination];
				origin = towerDataFactory.posts[origin];
				//console.log(origin.lastDisk(), destination.lastDisk());
				if ((destination.lastDisk() > origin.lastDisk() || destination.lastDisk() === -1) && origin.lastDisk() !== -1) {
					origin.move(destinationIndex);
				}
			}
		}
	}])