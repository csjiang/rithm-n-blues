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

describe('checkPerms', function() {
	it('returns false if the strings entered are different lengths', function() {
		expect(checkPerms('asdoij', 'ajsodiasjodiasjdoij')).toBe(false);
		expect(checkPerms('oi34jir', 'a')).toBe(false);
	});

	it('returns true if the strings entered are empty', function() {
		expect(checkPerms('', '')).toBe(true);
	});

	it('correctly identifies if the strings passed in are permutations of each other', function() {
		expect(checkPerms('abcde', 'edcba')).toBe(true);
		expect(checkPerms('dog', 'god')).toBe(true);
		expect(checkPerms('dog', 'God')).toBe(false);
		expect(checkPerms('dog', 'god      ')).toBe(false);
	});
});

describe('checkPermsSorted', function() {
	it('returns false if the strings entered are different lengths', function() {
		expect(checkPermsSorted('asdoij', 'ajsodiasjodiasjdoij')).toBe(false);
		expect(checkPermsSorted('oi34jir', 'a')).toBe(false);
	});

	it('returns true if the strings entered are empty', function() {
		expect(checkPermsSorted('', '')).toBe(true);
	});

	it('correctly identifies if the strings passed in are permutations of each other', function() {
		expect(checkPermsSorted('abcde', 'edcba')).toBe(true);
		expect(checkPermsSorted('dog', 'god')).toBe(true);
		expect(checkPermsSorted('dog', 'God')).toBe(false);
		expect(checkPermsSorted('dog', 'god      ')).toBe(false);
	});
});
