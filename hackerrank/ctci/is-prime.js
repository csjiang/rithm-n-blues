process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
        
        var isPrime = function(n) {
            if (n < 2) return 'Not prime';
            for (var i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return 'Not prime';
            }
            return 'Prime';
        }
        
        console.log(isPrime(n));
    }
}
