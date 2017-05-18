describe('encodeString', function() {
	it('returns an empty string if an empty string is passed in', function() {
		expect(encodeString('')).toBe('');
	});

	it('correctly encodes a single letter', function() {
		expect(encodeString('a')).toBe('1');
		expect(encodeString('i')).toBe('9');
		expect(encodeString('j')).toBe('10#');
		expect(encodeString('z')).toBe('26#');
	});

	it('correctly encodes a multi-character string', function() {
		expect(encodeString('bb')).toBe('2(2)');
		expect(encodeString('abbccbb')).toBe('12(2)3(2)2(2)');
		expect(encodeString('bjkyyyyy')).toBe('210#11#25#(5)');
	});
});