from LinkedList import LinkedList

class Test:
    
    def test_get_by_index(self):
        ll = LinkedList.from_vals([9,2,3])
        node = ll.get_by_index(1)
        badIndex = ll.get_by_index(-1)
        badIndex1 = ll.get_by_index(-1)
        assert badIndex == None
        assert badIndex1 == None
        assert node.value == 2

    def test_insert_at_head(self):
        ll = LinkedList.from_vals([9,2,3])
        ll.insert_at_head(10)
        assert ll.head.value == 10
        assert ll.length == 4

    def test_insert_at_index(self):
        ll = LinkedList.from_vals([9,2,3])
        ll.insert_at_index(-1, 8)
        ll.insert_at_index(21, 8)
        ll.insert_at_index(1, 6)
        assert ll.get_by_index(1).value == 6
        assert ll.length == 4

    def test_remove_head(self):
        ll = LinkedList.from_vals([9,5,8])
        assert ll.head.value == 9
        ll.remove_head()
        assert ll.head.value == 5

    def test_remove_at_index(self):
        ll = LinkedList.from_vals([9,2,3])
        ll.remove_at_index(-1)
        ll.remove_at_index(2)
        assert ll.get_by_index(2) == None
        assert ll.length == 2

    def test_reverse(self):
        ll = LinkedList.from_vals([2,6,7,9])
        assert ll.head.value == 2
        ll.reverse()
        assert ll.head.value == 9
        assert ll.get_by_index(1).value == 7