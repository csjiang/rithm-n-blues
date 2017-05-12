var flattenArray = (arr, result) => {
	var resultArray = result || [];
	for (var i = 0, l = arr.length; i < l; i ++) {
		if (Array.isArray(arr[i])) {
			flattenArray(arr[i], resultArray);
		} else {
			resultArray.push(arr[i]);
		}
	}
	return resultArray;
}

