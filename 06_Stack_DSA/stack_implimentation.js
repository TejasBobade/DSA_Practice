// Stack Operations -> push, pop, peek, isEmpty, size

// Basic Stack Implementation

class Stack {
    constructor() {
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
    }

    pop() {
        if(this.isEmpty()){
            return "Stack is Empty. Can't perform pop.";
        }

        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is Empty. Can't perform peek.";
        }

        return this.stack[this.size() - 1];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size() {
        return this.stack.length
    }

}

const stack = new Stack();
stack.push(10);
stack.push(1);
stack.push(25);
stack.push(56);
stack.push(0);
// console.log(stack);
console.log(stack.size());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());

