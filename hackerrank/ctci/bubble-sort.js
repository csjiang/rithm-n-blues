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
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    
    var lastSorted = a.length - 1;
    var numSwaps = 0; 
    
    function swap(arr, idx1, idx2) {
        var toSwap = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = toSwap; 
    }
    
    while (lastSorted > 0) {
        for (var i = 0, l = lastSorted; i < l; i++) {
            if (a[i] > a[i + 1]) {
                swap(a, i, i + 1);
                numSwaps += 1;
            }
        }
        lastSorted -= 1; 
    }
    
    console.log('Array is sorted in ' + numSwaps + ' swaps.\nFirst Element: ' + a[0] + '\nLast Element: ' + a[a.length - 1]);
    
}