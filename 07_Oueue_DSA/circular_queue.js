// Ques 1 : Circular Queue Implementation
// Design your implementation of the circular Queue. The circular queue is a linear data structure in which the operation are performed based on First 
// Out principle, and the Last position is vonnected back to the first position to make a circle.
// Circular Queue has a fixed size.

let MyCircularQueue = function (k) { // k is size of array
    this.queue = [];
    this.size = k;

};

MyCircularQueue.prototype.enQueue = function (value) {
    if(this.size === this.queue.length) return false;
    this.queue.push(value);
    return true;
};

MyCircularQueue.prototype.deQueue = function () {
    if(this.queue.length === 0) return false;
    this.queue.shift();
    return true;
};

MyCircularQueue.prototype.Front = function () {
    if(this.queue.length === 0) return false;
    return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
    if(this.queue.length === 0) return false;
    return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
    return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
    return this.size === this.queue.length;
};

let obj = new MyCircularQueue(3);
// let param_1 = obj.enQueue(value);
// let param_2 = obj.deQueue();
// let param_3 = obj.Front();
// let param_4 = obj.Rear();
// let param_5 = obj.isEmpty();
// let param_6 = obj.isFull()
console.log(obj.enQueue(24));
console.log(obj.Front(), obj.Rear());

console.log(obj.enQueue(35));
console.log(obj.enQueue(10));
console.log(obj.deQueue());
console.log(obj.enQueue(25));
console.log(obj.isFull());

console.log(obj.deQueue());
console.log(obj.deQueue());
console.log(obj.deQueue());
console.log(obj.isEmpty());

