class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);

    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index === 0) return this.head;
    if (index >= this.length || index < 0) return null;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    if (index < 0 || index > this.length) return;

    const prev = this.getByIndex(index - 1);

    if (prev === null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();
    if (index < 0 || index > this.length) return;

    const prev = this.getByIndex(index - 1);

    if (prev === null) return null;

    prev.next = prev.next.next;
    this.length--;
  }

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
