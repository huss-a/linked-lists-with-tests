class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // get methods
  getByIndex(index) {
    if (index === 0) return this.head;
    if (index >= this.length || index < 0) return null;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  // insertion methods
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);

    this.head = newNode;
    this.length++;
    return this;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    if (index < 0 || index > this.length) return this;

    const prev = this.getByIndex(index - 1);

    if (prev === null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
    return this;
  }

  // remove methods
  removeHead() {
    this.head = this.head.next;
    this.length--;
    return this;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();
    if (index < 0 || index > this.length) return;

    const prev = this.getByIndex(index - 1);

    if (prev === null) return null;

    prev.next = prev.next.next;
    this.length--;
    return this;
  }

  // reverse challenge
  reverse(reverseClass) {
    // a -> b -> c -> d
    // d -> c -> b -> a
    // great explanation of the algorithm: https://youtu.be/O0By4Zq0OFc?t=103
    let curr = this.head;
    let tmp_next,
      prev = null;

    while (curr) {
      tmp_next = curr.next; //saving this variable
      curr.next = prev;
      prev = curr;
      curr = tmp_next;
    }
    if (reverseClass) {
      this.head = prev;
      return this.head;
    }
    return prev; //new head
  }

  // visualization of list
  visualize() {
    let output = "";
    let current = this.head;
    let index = 0;
    while (current) {
      output += `${current.value} (${index === 0 ? "HEAD - 0" : index}) -> `;
      index++;
      current = current.next;
    }

    return console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromVals = (...vals) => {
  const ll = new LinkedList();
  for (let i = vals.length - 1; i >= 0; i--) {
    ll.insertAtHead(vals[i]);
  }

  return ll;
};

module.exports = LinkedList;
