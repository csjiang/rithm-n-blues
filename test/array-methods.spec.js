describe('Array methods', function() {

	describe('Array.prototype.even', function() {
		it('filters the array and returns another array containing all the even elements in the input array', function() {
			expect([1, 2, 3, 4].even()).toEqual([2, 4]);
		});

		it('can be chained with other array methods', function() {
			expect([1, 2, 3, 4, 5, 6, 7, 8].slice(0, 4).even()).toEqual([2, 4]);
		});

		it('should filter out non-integer values from the input array', function() {
			expect(["a", 1, "b", 300, -45, -22, "x", "q", 63, 122, 181, "z", 0.83, 0.11].even()).toEqual([300, 122]);
		});
	});

	describe('Array.prototype.odd', function() {
		it('filters the array and returns another array containing all the odd elements in the input array', function() {
			expect([1, 2, 3, 4].odd()).toEqual([1, 3]);
		});

		it('can be chained with other array methods', function() {
			expect([1, 2, 3, 4, 5, 6, 7, 8].slice(0, 4).odd()).toEqual([1, 3]);
		});

		it('should filter out non-integer values from the input array', function() {
			expect(["a", 1, "b", 300, -45, "x", "q", 63, 122, 181, "z", 0.83, 0.11].odd()).toEqual([1, 63, 181]);
		});
	});

	describe('Array.prototype.isInt', function() {
		it('filters the array and returns another array containing all the integer elements in the input array', function() {
			expect([1, 2, 3, 4, 5.5, 'hello'].isInt()).toEqual([1, 2, 3, 4]);
		});

		it('can be chained with other array methods', function() {
			expect([1, 3, true, 34343.20, {a: 2}, 0].reverse().isInt()).toEqual([0, 3, 1]);
		});

		it('should filter out non-integer values from the input array', function() {
			expect(["a", 1, "b", -45, 300, "x", "q", 63, 122, 181, "z", 0.83, 0.11].isInt()).toEqual([1, 300, 63, 122, 181]);
		});
	});

	describe('Array.prototype.over', function() {
		it('filters the array and returns another array containing all the integers less than the value passed in', function() {
			expect([1, 2, 3, 4].under(5)).toEqual([1, 2, 3, 4]);
			expect([1, 2, 3, 4].under(3)).toEqual([1, 2]);
			expect([1, 2, 3, 4].under(1)).toEqual([]);
		});

		it('can be chained with other array methods', function() {
			expect([1, 3, true, 34343.20, {a: 2}, 0].reverse().under(2)).toEqual([0, 1]);
		});

		it('should filter out non-integer values from the input array', function() {
			expect(["a", 1, "b", 300, -45, "x", "q", 63, 122, 181, "z", 0.83, 0.11].under(100)).toEqual([1, 63]);
		});
	});

	describe('Array.prototype.over', function() {
		it('filters the array and returns another array containing all the integers greater than the value passed in', function() {
			expect([1, 2, 3, 4].over(5)).toEqual([]);
			expect([1, 2, 3, 4].over(3)).toEqual([4]);
			expect([1, 2, 3, 4].over(1)).toEqual([2, 3, 4]);
		});

		it('can be chained with other array methods', function() {
			expect([1, 3, true, 34343.20, {a: 2}, 0].reverse().over(2)).toEqual([3]);
		});

		it('should filter out non-integer values from the input array', function() {
			expect(["a", 1, "b", 300, -45, "x", "q", 63, 122, 181, "z", 0.83, 0.11].over(100)).toEqual([300, 122, 181]);
		});
	});

	describe('Array.prototype.inRange', function() {
		it('filters the array and returns another array containing all the integers in range (inclusive) of the bounds passed in', function() {
			expect([1, 2, 3, 4].inRange(5, 100)).toEqual([]);
			expect([1, 2, 3, 4].inRange(3, 4)).toEqual([3, 4]);
			expect([1, 2, 3, 4].inRange(1, 4)).toEqual([1, 2, 3, 4]);
		});

		it('can be chained with other array methods', function() {
			expect([1, 3, true, 34343.20, {a: 2}, 0].reverse().inRange(2, 3)).toEqual([3]);
		});

		it('should filter out non-integer values from the input array', function() {
			expect(["a", 1, "b", 300, -45, "x", "q", 63, 122, 181, "z", 0.83, 0.11].inRange(0, 100)).toEqual([1, 63]);
		});
	});
});