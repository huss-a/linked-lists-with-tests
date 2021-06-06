const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
  it("it adds the element to the head of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldhead = ll.head;
    ll.insertAtHead(20);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldhead);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    it("it returns null", () => {
      const ll = LinkedList.fromVals(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    it("it returns null", () => {
      const ll = LinkedList.fromVals(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe("with index 0", () => {
    it("it returns the head", () => {
      const ll = LinkedList.fromVals(10, 20);

      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    it("it returns the element at that index", () => {
      const ll = LinkedList.fromVals(10, 20, 30, 40);

      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});

describe("#insertAtIndex", () => {
  describe("index less than 0", () => {
    it("doesn't insert anything", () => {
      const ll = LinkedList.fromVals(90, 81);
      ll.insertAtIndex(-1, 65);
      expect(ll.head.value).toBe(90);
      expect(ll.length).toBe(2);
    });
  });

  describe("greater than length of array", () => {
    it("doesn't insert anything", () => {
      const ll = LinkedList.fromVals(90, 81);
      ll.insertAtIndex(7, 65);
      expect(ll.head.value).toBe(90);
      expect(ll.length).toBe(2);
    });
  });

  describe("index of 0", () => {
    it("update head", () => {
      const ll = LinkedList.fromVals(89, 90);
      ll.insertAtIndex(0, 67);
      expect(ll.head.value).toBe(67);
      expect(ll.head.next.value).toBe(89);
      expect(ll.length).toBe(3);
    });
  });
  describe("with index in the middle", () => {
    it("it inserts the element at that index", () => {
      const ll = LinkedList.fromVals(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);
      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe("#removeHead", () => {
  it("removes head", () => {
    const ll = LinkedList.fromVals(89, 70, 80);
    ll.removeHead();
    expect(ll.head.value).toBe(70);
    expect(ll.length).toBe(2);
  });
});

describe("#removeAtIndex", () => {
  describe("index less than 0", () => {
    it("doesn't do anything", () => {
      const ll = LinkedList.fromVals(10, 20, 40);
      ll.removeAtIndex(-1);
      expect(ll.head.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe("index greater than list length", () => {
    it("doesn't do anything", () => {
      const ll = LinkedList.fromVals(10, 20, 40);
      ll.removeAtIndex(5);
      expect(ll.head.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe("index of 0", () => {
    it("updates head", () => {
      const ll = LinkedList.fromVals(10, 20, 40);
      ll.removeAtIndex(0);
      expect(ll.head.value).toBe(20);
      expect(ll.length).toBe(2);
    });
  });

  describe("middle index", () => {
    it("removed element at index", () => {
      const ll = LinkedList.fromVals(10, 20, 40);
      ll.removeAtIndex(1);
      const node = ll.getByIndex(1);
      expect(node.value).toBe(40);
      expect(ll.length).toBe(2);
    });
  });
});

describe("#reverse", () => {
  it("reverses the list", () => {
    const ll = LinkedList.fromVals(1, 2, 3, 4);
    ll.reverse();
    expect(ll.head.value).toBe(4);
    expect(ll.getByIndex(1).value).toBe(3);
  });
});
