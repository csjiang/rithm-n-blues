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
    var s = parseInt(readLine());
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        
        var stairPaths = { 1: 1, 2: 2, 3: 4 };
        var climbStairs = function(steps) {
            if (stairPaths[steps]) return stairPaths[steps];
            else {
                stairPaths[steps] = climbStairs(steps - 1) + climbStairs(steps - 2) + climbStairs(steps - 3);
                return stairPaths[steps]
            }
        }
        console.log(climbStairs(n));
    }
}
