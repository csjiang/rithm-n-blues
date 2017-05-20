//implement an algorithm to determine if a string has all unique characters.

function isUnique(str) { //assumes ASCII str input; needs greater memory if Unicode
	if (str.length > 128 || !str.length) return false;
	var chars = {};
	for (var i = str.length - 1; i >= 0; i--) {
		if (chars[str[i]]) return false;
		chars[str[i]] = true;
	}
	return true;
}

// given two strings, write a method to decide if one is a permutation of the other.

function checkPerms(s1, s2) { //case-sensitive; assume whitespace is significant; only ASCII inputs
	var l1 = s1.length;
	var l2 = s2.length;
	if (l1 !== l2) return false;

	var chars = {};
	for (var i = 0, l = l1; i < l; i++) {
		if (chars[s1[i]]) chars[s1[i]] += 1;
		else chars[s1[i]] = 1;
	}
	for (var i = 0, l = l2; i < l; i++) {
		if (chars[s2[i]]) chars[s2[i]] -= 1;
		else return false;

		if (chars[s2[i]] < 0) return false;
	}
	return true;
}

function checkPermsSorted(s1, s2) { //same constraints, but this solution compares sorted characters of both strings
	return s1.split('').sort().join('') === s2.split('').sort().join('');
}


// write a method to replace all spaces in a string with '%20'.
function URLify(str, length) {
	var result = '';
	for (var i = 0; i < length; i++) {
		str[i] === ' '
		? result += '%20'
		: result += str[i];
	}
	return result;
}

function URLify2(str, length) {
	return str.replace(/ /g, '%20');
}

function URLifyInPlace(strAsObject, length) {
	var finalLength = length;
	for (var i = 0; i < length; i++) {
		if (strAsObject[i] === ' ') finalLength += 2;
	}
	for (var i = length - 1; i >= 0; i--) {
		if (strAsObject[i] === ' ') {
			strAsObject[finalLength - 1] = '0';
			strAsObject[finalLength - 2] = '2';
			strAsObject[finalLength - 3] = '%';
			finalLength -= 3;
		} else {
			strAsObject[finalLength - 1] = strAsObject[i];
			finalLength -= 1;
		}
	}
	return strAsObject;
}
