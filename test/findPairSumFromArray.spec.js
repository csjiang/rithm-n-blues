describe('pairSum', function() {
	it('returns false if an empty array is passed in', function() {
		expect(pairSum([], 9)).toBe(false);
		expect(pairSum([], 290)).toBe(false);
	});

	it('correctly identifies when the array contains numbers that sum to the second parameter', function() {
		expect(pairSum([1, 2, 4, 4], 8)).toBe(true);
		expect(pairSum([-100, 2, 5, 7, 3, -5], 0)).toBe(true);
	});

	it('correctly identifies when the array does not contain numbers that sum to the second parameter', function() {
		expect(pairSum([1, 2, 4, 9], 8)).toBe(false);
		expect(pairSum([-100, 2, 5, 7, 3, -5], 23049384)).toBe(false);
	});
});