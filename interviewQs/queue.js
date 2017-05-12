function Queue() {
	this.items = [];
}

Queue.prototype.enqueue = function(item) {
	if(Array.isArray(item)) {
		this.items = this.items.concat(item);
	} else {
		this.items.push(item);
	}
}

Queue.prototype.dequeue = function(item) {
	return this.items.shift();
}

Queue.prototype.front = function() {
	return this.items[0];
}

Queue.prototype.size = function() {
	return this.items.length;
}

Queue.prototype.isEmpty = function() {
	return this.size() ? false : true;
}