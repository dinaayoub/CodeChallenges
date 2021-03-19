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
var addTwoNumbers = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let currentNode1 = l1;
  let currentNode2 = l2;

  let sum = currentNode1.val + currentNode2.val;
  let digit = sum % 10;
  let carry = Math.floor(sum / 10);
  let emptyNode = new ListNode(0, null);
  let newList = new ListNode(digit, null);
  let currentNewNode = newList;
  currentNode1 = currentNode1.next;
  currentNode2 = currentNode2.next;

  while ((currentNode1 !== emptyNode && currentNode1) || (currentNode2 !== emptyNode && currentNode2)) {
    sum = carry + (currentNode1 && currentNode1.val ? currentNode1.val : 0) + (currentNode2 && currentNode2.val ? currentNode2.val : 0);
    let digit = sum % 10;
    carry = Math.floor(sum / 10);
    currentNewNode.next = new ListNode(digit, null);
    currentNewNode = currentNewNode.next;
    if (currentNode1 && currentNode1.next)
      currentNode1 = currentNode1.next;
    else
      currentNode1 = emptyNode;
    if (currentNode2 && currentNode2.next)
      currentNode2 = currentNode2.next;
    else currentNode2 = emptyNode

  }
  if (carry) {
    currentNewNode.next = new ListNode(carry, null);
  }

  return newList;
};