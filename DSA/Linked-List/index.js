class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //head pointer is always point to the first pointer in the list
    this.size = 0;
    this.tail = null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //how to add node from start ...unshift(prepend) method
  unshift(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      //when list is empty
      this.head = node;
    } else {
      //when list is not empty
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //add node from last...push(append) method
  push(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      console.log(prev, "prev");
      prev.next = node;
      this.tail = node;
    }
    this.size++;
  }

  //remove node from last
  pop() {
    //if only one node in the list
    if (this.size === 1) {
      this.head = null;
      this.size--;
    }
    //if there is no node
    if (this.isEmpty()) {
      return null;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    this.print();
  }

  //remove from first...shift
  shift() {
    if (this.isEmpty()) {
      return null;
    }
    console.log(this.head.value, 'value')
    let value = this.head.value;
    this.head = this.head.next;

    this.size--;
    this.print();
    return value;
  }

  //addValueFromGivenIndex (insert) value
  addValueFromGivenIndex(value, index) {
    //if invalid index suppose index is greater than the list size
    if (index > this.size || index < 0) {
      return; //this will return function
    }

    //if insert value at 0 position (insert node at the begining of the list)
    if (index === 0) {
      this.unshift(value);
    } else {
      //if index is valid and greater than 0..add value in middle of list
      const node = new Node(value); //new instance of node class
      let prev = this.head; //initialise prev point to head
      for (let i = 0; i < index - 1; i++) {
        //advance prev pointer ..we point prev point at its own next pointer
        //for loop will exit when prev pointer is at previous node
        prev = prev.next;
      }
      //this will ensure the new node connected to existing list
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  //remove value from given index
  removeValueFromGivenIndex(index) {
    //1. list empty?
    if (this.isEmpty() || index === 0) {
      return null;
    }
    //2. Check if the index is valid
    if (index >= this.size || index <= 0) {
      console.log("sorry the given index is greater or less than its size");
      return;
    }

    //how i m gonna reach that index and delete that value
    // traverse list to find the node just before the one you want to remove

    let current = this.head;
    let count = 0;

    //
    if (index === 1) {
      current = current.next; // 10 current ...current.next :20
      this.head = current;
    } else {
      while (count < index && current) { //current last paryant jatoy
        current = current.next;
        count++
      }
      console.log(current);
      /* let removeNode = current.next;
       let newNode = removeNode.next;
       current.next = newNode; */
      current.next = current.next.next;
    }
    this.size--;
    //console.log(count);
    console.log(this.head);

    this.print();
  }

  replaceFromIndex(replaceVal, index) {
    if (this.isEmpty()) {
      return null;
    }

    if (index >= this.size || index < 0) {
      console.log("sorry the given index is greater than its size");
      return;
    }

    let current = this.head;
    //need to loop till index and replace the value to  replaceVal 
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.value = replaceVal
    //code is missing
    this.print();
  }

  //slice
  slice(startIndex, endIndex) {
    if (this.isEmpty()) {
      return null;
    }

    if (startIndex >= this.size || startIndex < 0 || endIndex >= this.size || endIndex < 0 || startIndex === endIndex || startIndex > endIndex) {
      return;
    }

    let prev = this.head;

  }

  //search by given value 
  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  traverse() {
    let current = this.head;
    let values = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }


  //dublicate method...node form..no head and size...value and next will be there
  //ek link list ko dusare link list mai kaise copy kare
  duplicate() {
    let newLL = new Node();
    let current = this.head;
    //console.log(current, 'current');
    while(current){ //current kadhi paryant run honar jo paryant current is equal to current.next hoil toh paryant
     newLL.value = current.value;
     newLL.next = current.next;
     current = current.next; ////current kadhi paryant run honar jo paryant current is equal to current.next hoil toh paryant
     console.log(current, 'current')
    } 
    console.log(newLL, 'list')
  }

  reverse(){ //commanly asked questions interview
    let current = this.head;
    console.log(current, 'current');
    let next = null;
    let prev = null;

    while(current){
      next = current.next; //20
      current.next = prev; //30
      
      prev = current; 
      current = next;
    }
    this.head = prev;

    this.print();
  }

  //how to display list
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues, "----");
      return listValues;
    }
  }
}


const list = new LinkedList();
/* console.log(list.getSize(), 'List Size');
console.log(list.isEmpty(), 'List is empty?') */
// list.print();
//list.prepend(10);

// list.prepend(20);
// list.prepend(30);
//list.print();
//list.getValueFromIndex(1);
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);

list.print();

//list.addValueFromGivenIndex(40, 0);
//list.print();

//list.addValueFromGivenIndex(70, 2);
//list.print();

//list.pop();
list.removeValueFromGivenIndex(1);
console.log(list);

/* list.replaceFromIndex(100, 2)
list.replaceFromIndex(500, 3);

list.shift() */

list.duplicate();

list.reverse();

