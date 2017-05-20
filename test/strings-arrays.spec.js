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

describe('URLify', function() {
	it('replaces all spaces in an input string with "%20"', function() {
		expect(URLify(' ', 1)).toBe('%20');
		expect(URLify('     ', 5)).toBe('%20%20%20%20%20');
		expect(URLify('Hello World     ', 16)).toBe('Hello%20World%20%20%20%20%20');
	});
});

describe('URLify2', function() {
	it('replaces all spaces in an input string with "%20"', function() {
		expect(URLify2(' ', 1)).toBe('%20');
		expect(URLify2('     ', 5)).toBe('%20%20%20%20%20');
		expect(URLify2('Hello World     ', 16)).toBe('Hello%20World%20%20%20%20%20');
	});
});

describe('URLifyInPlace', function() {
	it('replaces all spaces in an input string with "%20"', function() {
		expect(URLifyInPlace({ 0: ' ' }, 1)).toEqual({ 0: '%', 1: '2', 2: '0'});
		expect(URLifyInPlace({ 0: ' ', 1: ' ', 2: ' ', 3: ' ', 4: ' ' }, 5)).toEqual({ 0: '%', 1: '2', 2: '0', 3: '%', 4: '2', 5: '0', 6: '%', 7: '2', 8: '0', 9: '%', 10: '2', 11: '0', 12: '%', 13: '2', 14: '0' });
		expect(URLifyInPlace({0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o', 5: ' ', 6: 'W', 7: 'o', 8: 'r', 9: 'l', 10: 'd', 11: ' ', 12: ' ', 13: ' ', 14: ' ', 15: ' '}, 16)).toEqual({ 0: 'H', 1: 'e', 2: 'l', 3: 'l', 4: 'o', 5: '%', 6: '2', 7: '0', 8: 'W', 9: 'o', 10: 'r', 11: 'l', 12: 'd', 13: '%', 14: '2', 15: '0', 16: '%', 17: '2', 18: '0', 19: '%', 20: '2', 21: '0', 22: '%', 23: '2', 24: '0', 25: '%', 26: '2', 27: '0' });
	});
});

describe('oneAway', function() {
	it('correctly identifies whether two strings are one or zero edits away', function() {
		expect(oneAway('pale', 'ple')).toBe(true);
		expect(oneAway('pales', 'pale')).toBe(true);
		expect(oneAway('pale', 'bale')).toBe(true);
		expect(oneAway('pale', 'bake')).toBe(false);
		expect(oneAway('pleonasm', 'pleonasmus')).toBe(false);
	});
});
