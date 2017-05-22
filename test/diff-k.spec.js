describe('diffK', function() {
	it('returns 0 if an empty array is passed in', function() {
		expect(diffK([], 3)).toBe(0);
		expect(diffK([], 3348)).toBe(0);
	});

	it('counts the number of pairs of integers that have difference k', function() {
		var testArr = [1, 7, 5, 9, 2, 12, 3];
		var testK = 2;
		expect(diffK(testArr, testK)).toBe(4);
	});
});
