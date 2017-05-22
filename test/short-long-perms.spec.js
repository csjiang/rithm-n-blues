describe('findPermsOfShortStringInBigString', function() {
	// simplify testing
	var findPermsSB = findPermsOfShortStringInBigString;

	it('returns an empty array when given empty strings', function() {
		expect(findPermsSB('', '')).toEqual([]);
	});

	it('returns an array of start + end indices where permutations of string s are found in string b', function() {
		var s = 'abbc';
		var b = 'cbabadcbbabbcbabaabccbabc';
		expect(findPermsSB(s, b).length).toBe(7);
		expect(Array.isArray(findPermsSB(s, b))).toBe(true);
		expect(Array.isArray(findPermsSB(s, b)[0])).toBe(true);
		expect(findPermsSB(s, b)[0].length).toBe(2);
	});
});
