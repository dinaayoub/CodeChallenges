/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let current1, current2;
    let head;
    let tail;
    if (!l1) return l2;
    if (!l2) return l1;
    current1 = l1;
    current2 = l2;
    while (current1 && current2) {
        if (current1.val >= current2.val) {
            if (!tail) {
                tail = new ListNode(current2.val);
                head = tail;

            }
            else {
                tail.next = new ListNode(current2.val);
                tail = tail.next;

            }
            current2 = current2.next;
        } else {
            if (!tail) {
                tail = new ListNode(current1.val);
                head = tail;

            } else {
                tail.next = new ListNode(current1.val);
                tail = tail.next;
            }
            current1 = current1.next;
        }
    }
    if (current1) tail.next = current1;
    if (current2) tail.next = current2;
    return head;
};