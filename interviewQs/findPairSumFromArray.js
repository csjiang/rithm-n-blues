//given an array of at least 2 integers (can include negative integers, and individual integers can be repeated) and an integer sum, return a boolean value indicating whether that sum can be achieved by adding two (separate) integers from the array. 

//example 1: 
//pairSum([1, 2, 3, 9], 8) => false
//pairSum([1, 2, 4, 4], 8) => true

function pairSum(arr, sum) {
	var lowerBound = 0; 
	var upperBound = arr.length - 1; 
	while(lowerBound < upperBound) {
		var sumNow = arr[lowerBound] + arr[upperBound];
		if (sumNow === sum) return true;
		else if (sumNow < sum) lowerBound += 1; 
		else upperBound -= 1;
	}
	return false;
}