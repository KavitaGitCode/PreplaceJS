class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // A reference to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    
    // Add a node to the end of the list
    push(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    // Remove a node from the end of the list
    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const removedValue = this.tail.value;

        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        return removedValue;
    }

    // Add a node to the beginning of the list
    unshift(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    // Remove a node from the beginning of the list
    shift() {
        if (this.isEmpty()) {
            return null;
        }

        const removedValue = this.head.value;

        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;
        return removedValue;
    }

    // Print the list
    print() {
        let current = this.head;
        let listValues = '';

        while (current) {
            listValues += `${current.value} `;
            current = current.next;
        }

        console.log(listValues.trim());
    }
}

// Example usage
const list = new DoublyLinkedList();

list.push(10);
list.push(20);
list.push(30);

list.print(); // Output: 10 20 30

list.unshift(0);
list.print(); // Output: 0 10 20 30

console.log(list.pop()); // Output: 30
list.print(); // Output: 0 10 20

console.log(list.shift()); // Output: 0
list.print(); // Output: 10 20

console.log(list);
