class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add to end 
    append(data){
        const newNode = new Node(data);
        if (!this.head) this.head = newNode;
        else {
            let current = this.head;
            while (current.next) current = current.next;
            current.next = newNode;
        }
    }

}

// Reverse a linked list
function reverseList(head) {
    let prev = null, current = head;
    while(current) {
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}