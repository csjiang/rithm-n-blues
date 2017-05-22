// given an array of distinct integer values, count the # of pairs of integers that have difference k.

function diffK(arr, k) {
	var dict = {};
	var pairs = {};

	// populate hash
	for (var i = 0, l = arr.length; i < l; i ++) {
		dict[arr[i]] = true;
	}

	// record if e - k or e + k is extant in array
	for (var i = 0, l = arr.length; i < l; i ++) {
		var minus = arr[i] - k;
		var plus = arr[i] + k;

		if (dict[minus] && !pairs[minus, arr[i]]) {
			pairs[minus, arr[i]] = true;
		}
		if (dict[plus] && !pairs[arr[i], plus]) {
			pairs[arr[i], plus] = true;
		}
	}

	return Object.keys(pairs).length;
}
