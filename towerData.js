angular.module('app')
	.factory('towerDataFactory', [function() {

	var posts = [];

	var diskNum = 5;

	function Disk (size,position) {
		this.size = size;
		this.position = position;
	}

	function Post (position) {
		this.position = position;
		this.contents = [];
		this.removeDisk = function() {
			this.contents.pop()
		};
		this.addDisk = function(size) {
			this.contents.push(new Disk(size,this.position))
		};
		this.lastDisk = function() {
			return  this.contents.length === 0 ? 9999 : this.contents[this.contents.length-1].size
		}
		this.move = function (destination) {
			var origin = posts[this.position];
			destination = posts[destination];
			try {
				if (!this.isLegalMove(destination.position)) {
					throw new Error("invalid move")
				} else {
					destination.addDisk(origin.lastDisk())
					origin.removeDisk();
					//console.log('here')
				}
			} catch (e) {
				console.log(e.message)
			}

		};
		this.isLegalMove= function(destination) {
			if (this.lastDisk() < posts[destination].lastDisk()) {
				return true
			} else {
				return false
			}
		}

	}


	function initializePosts (postNum) {
		var out= [];
		for (var i = 0; i < postNum; i++) {
			out.push(new Post(i))
		}
		return out;
	}

	function initializeDisks (diskNum) {
		for (var i = diskNum-1; i >= 0 ; i-- ) {
			posts[0].addDisk(i)
		};
	}	

	posts = initializePosts(3);

	initializeDisks(diskNum);

	return {
		posts : posts,
		diskNum : diskNum
	}

	}])