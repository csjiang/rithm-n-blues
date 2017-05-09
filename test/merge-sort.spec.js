describe('mergeSort', function() {
	it('should correctly sort an empty array', function() {
		expect(mergeSort([])).toEqual([]);
	});

	it('should not change the array if the array passed in has length < 2', function() {
		var testArray = [1];
		expect(mergeSort(testArray)).toEqual([1]);
	});

	it('should correctly sort an odd-length array', function() {
		var testArray = [5, 4, 3, 2, 1];
		expect(mergeSort(testArray)).toEqual([1, 2, 3, 4, 5]);
	});

	it('should correctly sort an array with an even length', function() {
		var testArray = [6, 5, 2, 7, 2, 16];
		expect(mergeSort(testArray)).toEqual([2, 2, 5, 6, 7, 16]);
	});
});