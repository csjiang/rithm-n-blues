/*
Anagram 
(A word, phrase, or name formed by rearranging the letters of another)

Give a list of strings, return a list of anagram sets just from the original input.

Example:
    Input: ['cat', 'tablet', 'wolf', 'act', 'battle', 'flow', 'batlet', 'food']
    Output: [['cat', 'act'], ['tablet', 'battle', 'batlet'], ['wolf', 'flow']]

Note: It does not generate any new words that are not in the input.
*/

const anagram = arrOfStr => {
	let output = [];
	for (var i = 0; i < arrOfStr.length; i++) {
		for (var j = 0; j < output.length; j++) {
			if (arrOfStr[i] && output[j][0].length === arrOfStr[i].length) {
				if (output[j][0].split('').sort().join('') == arrOfStr[i].split('').sort().join('')) {
					output[j].push(arrOfStr[i]);
					arrOfStr[i] = null;
					break;
				}
			}
		};
		if (arrOfStr[i]) output.push([arrOfStr[i]]);
	}
	return output.filter(e => e.length > 1);
};

//A bit more efficient 
const objAnagram = arrOfStr => {
	const wordsDict = {};
	for (var i = 0; i < arrOfStr.length; i++) {
		const letters = arrOfStr[i].split('').sort().join('');
		wordsDict[letters] 
		? wordsDict[letters].push(arrOfStr[i])
		: wordsDict[letters] = [arrOfStr[i]] 
	}
	// return Object.keys(wordsDict)
	// .map(lettersCombo => wordsDict[lettersCombo])
	// .filter(e => e.length > 1);

	//combining map and filter into reduce
	return Object.keys(wordsDict)
	.reduce((anagrams, curr) => {
		//filter
		if (wordsDict[curr].length > 1) {
			anagrams.push(wordsDict[curr]);
		}
		return anagrams;
	}, []);
};

console.log(anagram(['cat', 'tablet', 'wolf', 'act', 'battle', 'flow', 'batlet', 'food']));
console.log(objAnagram(['cat', 'tablet', 'wolf', 'act', 'battle', 'flow', 'batlet', 'food']));