const assert = require('chai').assert;
const add = require('../src/Queue');
describe('Queue', function() {
    it('Queue should have property size', function() {
        const queue = new Queue(1);
        assert.equal(queue.size, 1);
    });

    it('Queue should have method push()', function() {
        const queue = new Queue();
        const result = queue.push();
        assert.typeOf(result, 'function');
    });

    it('Queue should have method pop()', function() {
        const queue = new Queue();
        const result = queue.pop();
        assert.typeOf(result, 'function');
    });

    it('Queue should have method top()', function() {
        const queue = new Queue();
        const result = queue.top();
        assert.typeOf(result, 'function');
    });

    it('Queue should have method merge()', function() {
        const queue = new Queue();
        const result = queue.merge();
        assert.typeOf(result, 'function');
    });

    it('size Queue shold have MAX size', function() {
        const queue = new Queue(3);
        queue.push(1, 2, 3, 4, 5, 6, 7);
        const result = queue.pop(4);
        assert.equal(result.length, 3);
    });    

    it('Queue method push() should receive infinite number of items and place one by one to queue', function() {
        const queue = new Queue(5);
        queue.push(1, 2, 3, 4, 5, 6, 7);
        const result = queue.pop(5);
        assert.equal(result, [1, 2, 3, 4, 5]);
    });

    it('Queue method pop() should return array', function() {
        const queue = new Queue(2);
        queue.push(1, 2);
        const result = queue.pop(2);
        assert.equal(Array.isArray(result), true);
    });

    it('Queue method pop() should return array contains n items of queue', function() {
        const queue = new Queue(5);
        queue.push(1, 2, 3, 4, 5);
        const result = queue.pop(3);
        assert.equal(result, [3, 4, 5]);
    });

    it('Queue method pop() should remove returned item from structure', function() {
        const queue = new Queue(5);
        queue.push(1, 2, 3, 4, 5);
        queue.pop(3);
        result = queue.pop(2);
        assert.equal(result, [1, 2]);
    });

    it('Queue method top() should return top item of queue', function() {
        const queue = new Queue(5);
        queue.push(1, 2, 3, 4, 5);
        const result = queue.top();
        assert.equal(result, 5);
    });
     
    it('Queue method merge() should merges 2 queues in one and returns new queue', function() {
        const queueFirst = new Queue(5);
        const queueSecond = new Queue(3);
        queueFirst.merge(queueSecond, true);
        const result = queue.top(8);
        assert.equal(result.length, 8);
    });
});