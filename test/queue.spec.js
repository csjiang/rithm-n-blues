describe('Queue', function() {
	var queue,
	testArr,
	valuesToInsert = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	beforeEach(function() {
		queue = new Queue();
		testArr = [];
	});

	it('has methods named `enqueue`, `dequeue`, `front`, `isEmpty`, and `size`', function() {
		expect(typeof queue.enqueue).toBe('function');
		expect(typeof queue.dequeue).toBe('function');
		expect(typeof queue.front).toBe('function');
		expect(typeof queue.isEmpty).toBe('function');
		expect(typeof queue.size).toBe('function');
	});

	it('enqueue adds a new item(or several) on the back of the queue', function() {
		queue.enqueue(1);
		expect(queue.size()).toBe(1);
		queue.enqueue(2);
		expect(queue.size()).toBe(2);
		queue.enqueue([3, 4, 5]);
		expect(queue.size()).toBe(5);
	});

	it('dequeue removes the first item from the front of the queue and returns it', function() {

		queue.enqueue(1);
		queue.enqueue(2);
		expect(queue.dequeue()).toBe(1);
		expect(queue.size()).toBe(1);
		expect(queue.dequeue()).toBe(2);
		expect(queue.size()).toBe(0);
	});

	it('isEmpty returns true if the queue does not contain any elements, and false if the number of elements in the queue is greater than 0', function() {
		expect(queue.isEmpty()).toBe(true);
		queue.enqueue(1);
		expect(queue.isEmpty()).toBe(false);
		queue.enqueue(2);
		expect(queue.isEmpty()).toBe(false);
		queue.dequeue();
		queue.dequeue();
		expect(queue.isEmpty()).toBe(true);
	});

	it('front returns the first element from the queue (the first one added, and the next to be removed), without modifying the queue', function() {
		expect(queue.front()).toBe(undefined);
		queue.enqueue([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		expect(queue.front()).toBe(1);
		queue.dequeue();
		expect(queue.front()).toBe(2);
	});

	it('size returns the number of elements contained in the queue', function() {
		expect(queue.size()).toBe(0);
		queue.enqueue([1, 2, 3, 4, 5, 6, 7, 8, 9]);
		expect(queue.size()).toBe(9);
	});
});