describe('countPaths', function() {
	it('correctly counts the number of paths from top to bottom', function() {
		expect(countPaths(0, 0, 1)).toBe(2);
		expect(countPaths(0, 0, 2)).toBe(6);
	});
});

describe('countPathsMemoized', function() {
	it('correctly counts the number of paths from top to bottom', function() {
		expect(countPaths(0, 0, 1)).toBe(2);
		expect(countPaths(0, 0, 2)).toBe(6);
	});
});