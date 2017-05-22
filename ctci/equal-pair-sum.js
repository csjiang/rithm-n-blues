// print all positive integer solutions to the equation a^3 + b^3 = c^3 + d^3 where a, b, c, and d are integers between 1 and n.

function equalPairSum(n) {
	var sumListsDict = {};
	var solutions = [];
	// generate pairs
	for (var a = 1; a <= n; a++) {
		for (var b = 1; b <= n; b++) {
			var result = a * b;
			sumListsDict[result]
				? sumListsDict[result].push([a, b])
				: sumListsDict[result] = [[a, b]];
		}
	}

	// append pairs to result
	for (var result in sumListsDict) {
		sumListsDict[result].forEach(function(pair1) {
			sumListsDict[result].forEach(function(pair2) {
				solutions.push([pair1, pair2]);
			});
		});
	}
	return solutions;
}
