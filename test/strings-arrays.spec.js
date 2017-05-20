describe('isUnique', function() {
	it('returns false for an empty string', function() {
		expect(isUnique('')).toBe(false);
	});

	it('returns false for an ASCII string over 256 characters in length', function() {
		expect(isUnique('abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz')).toBe(false);
	});

	it('correctly identifies whether the string input is composed of unique characters', function() {
		expect(isUnique('bghfijlkANT')).toBe(true);
		expect(isUnique('bghfijlkANTb')).toBe(false);
	});
});
