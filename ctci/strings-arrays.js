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
