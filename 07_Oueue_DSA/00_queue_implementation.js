// Oueue Operations -> enqoeue(),dequeue(),peek(),isEmpty(),size()

// Basic Queue Implementation
// Class are bassically a templeate to create object in JS.

class Queue {
    constructor(){
        this.queue = [];
    }

    enquque(element){
        this.queue.push(element);
    }

    dequeue() {
        if(this.isEmpty()){
            return "Underflow, cannot perform dequeue";
        }

        return this.queue.shift();
    }

    isEmpty(){
        return this.size() === 0;
    }

    front(){
        if(this.isEmpty()){
            return "No Element in the Queue";
        }

        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    printQueue(){
        let queueStaring = "";
        for (let i = 0; i < this.size(); i++) {
            queueStaring += this.queue[i] + ", ";
        }
        console.log("Queue: "+ queueStaring);
        
    }
}

const myQueue = new Queue();

myQueue.enquque(5);
myQueue.enquque(25);
myQueue.enquque(55);

myQueue.dequeue();

console.log(myQueue.printQueue());
console.log(myQueue.front());
console.log(myQueue.size());

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.dequeue());
console.log(myQueue.front());

