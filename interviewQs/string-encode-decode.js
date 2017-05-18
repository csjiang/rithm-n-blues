// a hackerrank interview q I completely failed today... 
// encodeString takes in a string of a-z characters and returns a string with the characters encoded according to their position in the alphabet, with two-digit positions followed by a '#'. 
	// examples: 
// 'a' -> '1'
// 'b' -> '2'
// ... 
// 'i' -> '9'
// 'j' -> '10#'
// 'k' -> '11#'
// ... 
// 'y' -> '25#'
// 'z' -> '26#'
// as an additional rule, when there are character repetitions, the number of characters is appended following the letter with the number of occurrences in parentheses, like so:  
	// examples: 
// 'bb' -> '2(2)'
// 'abbccbb' -> '12(2)3(2)2(2)'
// 'bjkyyyyy' -> '210#11#26#(5)'

function encodeString(str) {
	var result = '';
	var currentChar = '';
	var last = '';
	var currentCount = 0;

	for (var i = 0, l = str.length; i < l; i++) {
		currentChar = str.charCodeAt(i) - 96;
		if (currentChar > 9) currentChar += '#';

		if (last === currentChar) {
			currentCount += 1;
			if (i === l - 1) {
				// TODO: fix this 
				if (currentCount > 1) result += '(' + currentCount + ')';
			}
		} else {
			if (currentCount > 1) result += '(' + currentCount + ')';
			currentCount = 1;
			result += currentChar;
		}
		last = currentChar;
	}
	return result;
}