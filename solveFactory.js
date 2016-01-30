angular.module('app')
	.factory('solveFactory', ['towerDataFactory', function(towerData) {
		var moveDisk = function(diskNum,origin,holder,destination) {
			var posts = towerData.posts;
			origin = posts[origin];
			//console.log(origin);
			holder = posts[holder];
			destination = posts[destination];
			console.log(arguments)
			if (origin.lastDisk() === diskNum && ( destination.lastDisk() > diskNum || destination.lastDisk() === -1)) {
				origin.move(destination.position)
			} else {
				if (diskNum-1 >= 0) {
					moveDisk(diskNum-1,origin.position,destination.position,holder.position);
				}
				moveDisk(diskNum, origin.position, holder.position, destination.position);
			}
		}

		var moveNDisks = function(nDisks, origin, holder,destination) {
			console.log(origin)
			var posts = towerData.posts;
			origin = posts[origin];
			holder = posts[holder];
			destination = posts[destination];
			if (nDisks === 2) {
				origin.move(holder.position);
				origin.move(destination.position);
				holder.move(destination.position);
			} else {
				moveNDisks(nDisks-1, origin.position, destination.position, holder.position);
				moveNDisks(1, origin.position, holder.position, destination.position);
				moveNDisks(2, holder.position, origin.position, destination.position);
			}
		}

		var interativeSolve = function(step) {
			var posts = towerData.posts;
			var a = posts[0];
			var b = posts[1];
			var c = posts[2];
			var diskNum = towerData.diskNum;
			var i = 50;
			if (diskNum % 2 === 0) {
				if (c.contents.length !== diskNum) {
					if (a.isLegalMove(b.position) && step === 0) {
						a.move(b.position)
					} else if (step === 0) {
						b.move(a.position)
					}
					if (a.isLegalMove(c.position) && step === 1) {
						a.move(c.position)
					} else if (step === 1) {
						c.move(a.position)
					}
					if (b.isLegalMove(c.position) && step === 2) {
						b.move(c.position)
					} else if (step === 2) {
						c.move(b.position)
					}
					
				}
			} else {
				if (c.contents.length !== diskNum) {
					if (step === 0) {
						if (a.isLegalMove(c.position)) {
							a.move(c.position)
						} else {
							c.move(a.position)
						}
					} else if (step === 1) {
						if (a.isLegalMove(b.position)) {
							a.move(b.position)
						} else {
							b.move(a.position)
						}
					} else {
						if (c.isLegalMove(b.position)) {
							c.move(b.position)
						} else {
							b.move(c.position)
						}
					}
				}
			}
		}

		return {
			interativeSolve : interativeSolve,
			step : 0
		}
	}])