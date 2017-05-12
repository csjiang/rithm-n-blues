// Given a square grid, how could you determine the number of possible paths from the top left of the grid to the bottom right, assuming you can only move to the right and down?

var countPaths = function(x, y, max) {
	if (x === max || y === max) return 1;
	else {
		return countPaths(x + 1, y, max) + countPaths(x, y + 1, max);
	};
}

// TODO: count paths, memoized

// var countPathsMemoized = function(x, y, max) {
// 	var pathMap = {};

// }