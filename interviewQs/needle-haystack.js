var indexOf = function(haystack, needle) {
	if (needle.length > haystack.length) return -1;
	if (needle === haystack) return 0;
	for (var i = 0, l = haystack.length; i < l; i++) {
		if (haystack[i] === needle[0]) {
			if (haystack.slice(i, i + needle.length) === needle) {
				return i;
			}
		}
	}
	return -1;
};