Array.prototype.isInt = function() {
	return this.filter(function(e) {
		return typeof e === 'number' && e % 1 === 0 && e >= 0;
	});
};

Array.prototype.even = function() {
	return this.isInt().filter(function(e) {
		return e % 2 === 0;
	});
};

Array.prototype.odd = function() {
	return this.isInt().filter(function(e) {
		return e % 2 > 0;
	});
};

Array.prototype.under = function(n) {
	return this.isInt().filter(function(e) {
		return e < n;
	});
};

Array.prototype.over = function(n) {
	return this.isInt().filter(function(e) {
		return e > n;
	});
};

Array.prototype.inRange = function(l, u) {
	return this.isInt().filter(function(e) {
		return e >= l && e <= u;
	});
};