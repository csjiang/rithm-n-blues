describe('equalPairSum', function() {
	it('returns an empty array when n is 0', function() {
		expect(equalPairSum(0)).toEqual([]);
	});

	it('returns an array of nested arrays composing integer pairs up to n that sum to the same value', function() {
		expect(equalPairSum(4)).toEqual([
			[ [ 1, 1 ], [ 1, 1 ] ],
			[ [ 1, 2 ], [ 1, 2 ] ],
			[ [ 1, 2 ], [ 2, 1 ] ],
			[ [ 2, 1 ], [ 1, 2 ] ],
			[ [ 2, 1 ], [ 2, 1 ] ],
			[ [ 1, 3 ], [ 1, 3 ] ],
			[ [ 1, 3 ], [ 3, 1 ] ],
			[ [ 3, 1 ], [ 1, 3 ] ],
			[ [ 3, 1 ], [ 3, 1 ] ],
			[ [ 1, 4 ], [ 1, 4 ] ],
			[ [ 1, 4 ], [ 2, 2 ] ],
			[ [ 1, 4 ], [ 4, 1 ] ],
			[ [ 2, 2 ], [ 1, 4 ] ],
			[ [ 2, 2 ], [ 2, 2 ] ],
			[ [ 2, 2 ], [ 4, 1 ] ],
			[ [ 4, 1 ], [ 1, 4 ] ],
			[ [ 4, 1 ], [ 2, 2 ] ],
			[ [ 4, 1 ], [ 4, 1 ] ],
			[ [ 2, 3 ], [ 2, 3 ] ],
			[ [ 2, 3 ], [ 3, 2 ] ],
			[ [ 3, 2 ], [ 2, 3 ] ],
			[ [ 3, 2 ], [ 3, 2 ] ],
			[ [ 2, 4 ], [ 2, 4 ] ],
			[ [ 2, 4 ], [ 4, 2 ] ],
			[ [ 4, 2 ], [ 2, 4 ] ],
			[ [ 4, 2 ], [ 4, 2 ] ],
			[ [ 3, 3 ], [ 3, 3 ] ],
			[ [ 3, 4 ], [ 3, 4 ] ],
			[ [ 3, 4 ], [ 4, 3 ] ],
			[ [ 4, 3 ], [ 3, 4 ] ],
			[ [ 4, 3 ], [ 4, 3 ] ],
			[ [ 4, 4 ], [ 4, 4 ] ] ]);

		expect(Array.isArray(equalPairSum(4))).toBe(true);

		expect(Array.isArray(equalPairSum(10)[0])).toBe(true);

		expect(Array.isArray(equalPairSum(100)[0][0])).toBe(true);

		var testResult = equalPairSum(4);

		var times = function(a, b) { return a * b };

		testResult.forEach(function(pairs) {
			expect(pairs.length).toBe(2);
			expect(pairs[0].length).toBe(2);
			expect(pairs[1].length).toBe(2);
			expect(pairs[0].reduce(times)).toEqual(pairs[1].reduce(times));
		});

		var noDuplicates = function(arr) {
			var unique = [...new Set(arr)];
			return unique.length === arr.length;
		}

		expect(noDuplicates(testResult)).toBe(true);
	});
});
