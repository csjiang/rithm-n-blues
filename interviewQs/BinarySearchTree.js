function Node(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

Node.prototype.insert = function(value) {
	if (this.value > value) {
		if (this.left) this.left.insert(value);
		else this.left = new Node(value);
	} else {
		if (this.right) this.right.insert(value);
		else this.right = new Node(value);
	}
}

Node.prototype.size = function() {
	var count = 0;
	this.depthFirstForEach(function() {
		count += 1;
	});
	return count; 
}

Node.prototype.contains = function(val) {
	var nodes = [ this ];
	var pointer;
	while (nodes.length) {
		pointer = nodes.shift();
		if (pointer.value === val) return true;
		if (pointer.left) nodes.push(pointer.left);
		if (pointer.right) nodes.push(pointer.right);
	}
	return false;
}

Node.prototype.depthFirstForEach = function(forEachFn, option) {
	if (option === 'pre-order') forEachFn(this.value); //processes roots first, so useful for copying a tree as-is.

	if (this.left) this.left.depthFirstForEach(forEachFn, option);

	if (!option || option === 'in-order') forEachFn(this.value); //this way, values are processed according to their comparative order (in a BST)

	if (this.right) this.right.depthFirstForEach(forEachFn, option); 

	if (option === 'post-order') forEachFn(this.value); //processes leaves first, so useful for doing something like deleting a tree 
}

Node.prototype.breadthFirstForEach = function(forEachFn) {
	var nodes = [ this ]; //todo: practice implementing with two arrays or a 2-stack queue for optimized time complexity 
	var pointer; 
	while (nodes.length) {
		pointer = nodes.shift(); 
		forEachFn(pointer.value); 
		if (pointer.left) nodes.push(pointer.left);
		if (pointer.right) nodes.push(pointer.right);
	}
}