/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    clear() {
        this.head = null;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }
    getFirst() {
        return this.head;
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


var mergeTwoLists = function (l1, l2) {
    var i = 0;
    var j = 0;
    var list = [];
    while (i < l1.length && j < l2.length) {
        if (l1[i] === l2[j]) {
            list.push(l1[i], l2[j]);
            i++;
            j++;
        } else if (l1[i] < l2[j]) {
            list.push(l1[i]);
            i++;
        } else //if (l1[i]> l2[j])
        {
            list.push(l2[j]);
            j++;
        }
    }
    if (i === l1.length && j !== l2.length) {
        //add what remains of l2
        for (let x = j; x < l2.length; x++) {
            list.push(l2[x]);
        }
    } else if (j == l2.length && i !== l1.length) {
        //add what remains of l1
        for (let x = i; x < l1.length; x++) {
            list.push(l1[x]);
        }
    }
    console.log(list);
    if (list.length > 0) {
        var linkedList = new LinkedList(new ListNode(list[0]));
        for (let y = 1; y < list.length; y++) {
            var node = new ListNode(list[y]);
            linkedList.getLast().next = node;
        }
        return linkedList;
    } else { 
        //return new ListNode(); 
    }

};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));