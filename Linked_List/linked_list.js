// Anlike array in linked list data is not stored in sequential minear each node is connected with pointer
// First node called head
// each node has data and the reference to the next node
// last node is know as tail and it has reference to null

/*
const node1 = {
    data: 100
};

const node2 = {
    data: 200
};

// This connect node1 with node2
node1.next = node2

console.log(node2)
*/

class Node {
    constructor (data, next = null){
        this.data = data;
        this.next = next;
    }
}

// This will have node with value of 100 pointing to next node which is null
// const node1 = new Node(100);
// console.log(node1);

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast (data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert at Index
    isertAt(data, index) {
        // If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if(index==0) {
            this.insertFirst(data) = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        

    }

    // Get at Index

    // Remove at Index

    // Clear List

    // Print list data
    printListData () {
        let current = this.head;

        while (current){
            console.log(current.data);
            current = current.next;
            
        }
    }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.printListData();