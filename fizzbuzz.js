/**
Fizzbuzz

Input: list of integers
Output: Write a script that will print 1-100 except:

if divisable by 3 - write fizz
if divisable by 5 - write buzz
if divisable by 15 - write fizz buzz
**/

const fizzBuzz = () => {
	let output = '', counter = 0;
	while (counter++ < 100) {
		let addition = '';
		if (counter % 3 == 0) addition += 'fizz';
		if (counter % 5 == 0) addition += 'buzz';
		if (!addition) addition = counter;
		output += addition + '\n';
	}
	console.log(output);
};

const fizzBuzzGenerator = () => {
	function* fizzBuzzGen() {
	  let index = 0;
	  while(index++ < 100) {
	  	let addition = '';
	  	if (index % 3 == 0) addition += 'fizz';
	  	if (index % 5 == 0) addition += 'buzz';
		if (!addition) addition = index;
	    yield addition;
	  }
	}

	let gen = fizzBuzzGen();

	let fbCounter = 0;
	while (fbCounter++ < 100) {
		console.log(gen.next().value);
	}
};

const fizzBuzzArray = () => {
	let fbArray = new Array(100).fill(''); 
	for (var i = 1; i <= 100; i++) {
		if (i % 3 == 0) fbArray[i - 1] += 'fizz';
		if (i % 5 == 0) fbArray[i - 1] += 'buzz';
		if (!fbArray[i - 1]) fbArray[i - 1] = i;
	}
	console.log(fbArray.join('\n'));
};

fizzBuzz();
fizzBuzzGenerator();
fizzBuzzArray();