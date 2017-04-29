function processData(input) {
    function Stack() {
        this.items = [];
        this.length = 0; 
        this.add = function(item) {
            this.items.push(item);
            this.length += 1;
        };
        this.pop = function() {
            this.length -= 1;
            return this.items.pop();
        };
        this.peek = function() {
            return this.items[this.length - 1];
        };
    }
    
    function Queue() {
        this.rear = new Stack();
        this.front = new Stack();
        this.enqueue = function(item) {
            this.rear.add(item);
        };
        this.dequeue = function() {
            this.processQueue();
            return this.front.pop();
        };
        this.printFront = function() {
            this.processQueue();
            console.log(this.front.peek());
        };
        this.processQueue = function() {
            if (!this.front.length) {
                while (this.rear.length) {
                    this.front.add(this.rear.pop());
                }
            }
        };
    }
    
    var processQueue = new Queue(); 
    var inputQueue = input.split('\n');
    for (var i = 1, l = inputQueue[0]; i <= l; i++) {
        var query = inputQueue[i].split(' ');
        if (query.length > 1) {
            processQueue.enqueue(query[1]);
        } else if (query[0] == '2') {
            processQueue.dequeue();
        } else {
            processQueue.printFront();
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
