angular.module('app')
	.factory('towerData', [function() {

	var posts = [];

	var diskNum = 4

	function Disk (size,position) {
		this.size = size;
		this.position = position;
		this.move = function (destination) {
			try {
				if (this.size >= destination.contents[this.contents.length-1]) {
					throw new Error("invalid move")
				}
				posts[this.position].removeDisk();
				posts[destination].addDisk(this.size)

			} catch (e) {
				console.log(e.message)
			}

		}
	}

	function Post (position) {
		this.position = position;
		this.contents = [];
		this.removeDisk = function() {
			this.contents.pop()
		}
		this.addDisk = function(size) {
			this.contents.push(new Disk(size,this.position))
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

	initializeDisks(3);

	return {
		posts : posts
	}

	}])