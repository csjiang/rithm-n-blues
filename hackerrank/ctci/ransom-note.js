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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    
    // return 'no' if more note than mag words exist
    if (n > m) return process.stdout.write('No');
    
    var words = {};
    
    // add mag words to dictionary
    for (var i = 0, l = m; i < l; i++) {
        var w = magazine[i];
        if (words[w]) words[w] += 1;
        else words[w] = 1;
    }
    
    // loop through ransom words
    for (var i = 0, l = n; i < l; i++) {
        var w = ransom[i];
        if (words[w]) {
            words[w] === 1 
                ? delete words[w]
                : words[w] -= 1;
        } else {
            return process.stdout.write('No');
        }
    }
    
    return process.stdout.write('Yes');
}