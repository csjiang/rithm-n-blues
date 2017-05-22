// given a smaller string s and a bigger string b, find all permutations of the smaller string within the longer one. print the location of each permutation.

//helper functions
function isZero(x) { return x === 0 }

function allValuesZero(obj) {
	return Object.keys(obj).every(function(key) { return isZero(obj[key]) });
}

function findPermsOfShortStringInBigString(s, b) { // naming sense broken today
	if (!s.length || !b.length) return [];

	var letters = {};

	// fill letters dictionary
	for (var i = 0, l = s.length; i < l; i ++) {
		letters[s[i]]
			? letters[s[i]] += 1
			: letters[s[i]] = 1;
	}

	// init moving window of s.length + decrement letters found in initial window
	var start = 0;
	var end = s.length - 1;
	var results = [];

	for (var i = start; i <= end; i++) {
		if (letters[b[i]]) letters[b[i]] -= 1;
	}

	while (end < b.length) {

		if (allValuesZero(letters)) {
			results.push([start, end]);
		}

		if (letters[b[start]] !== undefined) {
			letters[b[start]] += 1;
		}

		start += 1;
		end += 1;

		if (letters[b[end]] !== undefined) letters[b[end]] -= 1;
	}

	return results;
}
