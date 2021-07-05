class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    addNode(element) {
        let node = new Node(element);       // create a new node
        let current;        // to store current node
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.tail = node;
        }
        this.size++;
    }

    insertNode(element, index) {
        let node = new Node(element);
        let current, previous;
        if (this.isEmpty() && index > this.size) {
            console.log('Linked List doesnt exist')
        } else if (index == 0) {
            node.next = this.head;
            this.head = node;
            this.tail = node;
        } else if (index == this.size_of_LL()) {
            node.next = null;
            this.tail.next = node;
            this.tail = node;
        } else {
            current = this.head;
            let iterate = 0;
            while (iterate < index) {
                iterate++;
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
            this.tail = node;
        }
        this.size++;
    }

    deleteNode(index) {
        let current = this.head;
        let previous = current;
        if (this.isEmpty() && !this.size) {
            console.log('Linked List doesnt exist')
        } else if (index == 0) {
            this.head = current.next;
        } else {
            let iterator = 0;
            while (iterator < index) {
                iterator++;
                previous = current;
                current = current.next;
            }
            // remove the element
            previous.next = current.next;
        }
        this.size--;
        return current.element;
    }

    deleteLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    searchNode(nodeVal) {
        let iterator = 0;
        let current = this.head;
        let size = this.size;
        while (iterator < this.size) {
            iterator++;
            if (current.element == nodeVal) {
                console.log(nodeVal, ' is available in the list at position ', iterator);
                return;
            }
            current = current.next;
        }
        console.log('Node value not found');
        return;
    }

    removeElement(element) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.element == element) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    printList() {   // prints the list items
        let current = this.head;
        let str = "";
        while (current) {
            str += current.element + " ";
            current = current.next;
        }
        console.log(str);
    }

    size_of_LL() {
        console.log(this.size);
    }


    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }

}






var ll = new LinkedList();



ll.addNode(10);
ll.addNode(20);
ll.addNode(30);
ll.insertNode(122, 3)
ll.printList();