class LinkedList:
    def __init__(self) -> None:
        self.head = None
        self.length = 0

    # get methods
    def get_by_index(self, index):
        if(index < 0 or index > self.length):
            return None
        if(index == 0):
            return self.head

        current = self.head
        print(f"in get by index,value of current is {current.value}")
        for i in range(index):
            current = current.next

        return current

    # insertion methods
    def insert_at_head(self, data):
        self.head = LinkedListNode(data, self.head)
        self.length += 1
        return self

    def insert_at_index(self, index, value):
        if(index < 0 or index > self.length):
            return self
        if(index == 0):
            self.insert_at_head(value)
            return self

        previous_node = self.get_by_index(index - 1)
        previous_node.next = LinkedListNode(value, previous_node.next)
        self.length += 1
        return self

    # removal methods
    def remove_head(self):
        self.head = self.head.next
        self.length -= 1
        return self

    def remove_at_index(self, index):
        if(index < 0 or index > self.length):
            return self

        previous_node = self.get_by_index(index - 1)
        previous_node.next = previous_node.next.next
        self.length -= 1
        return self

    def reverse(self, reverse_class = False):
        tmp_next, prev = None, None
        curr = self.head
        while(curr):
            tmp_next = curr.next
            curr.next = prev
            prev = curr
            curr = tmp_next
        if(reverse_class):
            self.head = prev
            return self.head
        return prev

    def __str__(self) -> str:
        current = self.head
        output = ""
        index = 0
        while(current):
            output += f"{current.value} ({index}) -> "
            current = current.next
            index += 1
        return output + "null"

def from_vals(values: list):
    if values != None:
        ll = LinkedList()
        i = len(values) - 1
        while(i >= 0):
            ll.insert_at_head(values[i])
            i -= 1
        return ll
LinkedList.from_vals = from_vals

class LinkedListNode:
    def __init__(self, value, next) -> None:
        self.value = value
        self.next = next