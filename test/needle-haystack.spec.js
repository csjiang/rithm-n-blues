describe('indexOf', function() {
	it('takes a "haystack" string and a "needle" string, and returns the (first) index where the needle string begins', function() {
		expect(indexOf('hello world', 'or')).toBe(7);
		expect(indexOf('hello world', 'o')).toBe(4);
	});

	it('is case-sensitive', function() {
		expect(indexOf('hello world', 'Hello')).toBe(-1);
		expect(indexOf('hello world', 'hello')).toBe(0);
	});

	it('returns 0 when the needle string equals the haystack string', function() {
		expect(indexOf('hello', 'hello')).toBe(0);
	});

	it('returns -1 when the needle string cannot be found', function() {
		expect(indexOf('hello world', 'z')).toBe(-1);
	});

	it('returns -1 when the needle string is longer than the haystack string', function() {
		expect(indexOf('world', 'hello world')).toBe(-1);
	});
});