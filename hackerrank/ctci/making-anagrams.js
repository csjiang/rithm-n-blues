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
    var a = readLine();
    var b = readLine();
    
    var chars = {};
    var result = 0;
    
    function processCharsFromStr(str, add) {      
        for (var i = 0, l = str.length; i < l; i++) {
            var c = str[i];
            if (chars[c]) {
                if (add) chars[c] += 1;
                else chars[c] -= 1;
            } else {
                if (add) chars[c] = 1; 
                else chars[c] = -1;
            }
        }
    }
    
    processCharsFromStr(a, true); 
    processCharsFromStr(b, false);
    
    for (var c in chars) {
        if (chars[c] !== 0) result += Math.abs(chars[c]);
    }
    
    console.log(result);
}