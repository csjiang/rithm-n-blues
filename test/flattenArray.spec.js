describe('flattenArray', function() {
	it('should correctly flatten an empty array', function() {
		expect(flattenArray([])).toEqual([]);
	});

	it('should not change the array if the array passed in is one-dimensional', function() {
		var testArray = [1, 6, 3, 7, 8, 2, 6];
		expect(flattenArray(testArray)).toEqual([1, 6, 3, 7, 8, 2, 6]);
	});

	it('should correctly flatten a nested array of arbitrary depth', function() {
		var testArray = [1, [2, [3, 4]], [5]];
		expect(flattenArray(testArray)).toEqual([1, 2, 3, 4, 5]);
	});
});