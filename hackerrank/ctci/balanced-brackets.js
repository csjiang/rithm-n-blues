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
    var t = parseInt(readLine());
    
    function Stack() {
        this.items = [];
        this.add = function(item) {
            this.items.push(item);
        };
        this.pop = function() {
            return this.items.pop();
        };
        this.peek = function() {
            return this.items[this.items.length - 1];
        };
    };
    
    function checkBrackets(str) {
        var pairs = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        var bStack = new Stack();
        
        for (var i = 0, l = str.length; i < l; i++) {
            var b = str[i];
            // if bracket is a closing one
            if (pairs[b]) {
                // remove from stack if brackets match
                if (pairs[b] === bStack.peek()) {
                    bStack.pop();
                } else {
                    return process.stdout.write('NO\n');
                }
            } else {
                bStack.add(b);
            }
        }
        
        // check to make sure all brackets have been matched
        if (bStack.peek()) return process.stdout.write('NO\n');
        else return process.stdout.write('YES\n');
    };
    
    for (var a0 = 0; a0 < t; a0++) {
        var expression = readLine();
        checkBrackets(expression);
    }
}