describe('calculateWater', function() {
	it('returns an empty array if an empty array or high sea level is passed in', function() {
		expect(calculateWater([], 0)).toEqual([]);
		expect(calculateWater([3, 3, 3], 3)).toEqual([]);
	});

	it('returns the correct amount of water', function() {
		var terrains = [1, 5, 1, 4, 3, 2, 1, 3, 4, 5, 7];
		var sea_level = 4;
		expect(calculateWater(terrains, sea_level)).toEqual([3, 3, 7]);
	});
});