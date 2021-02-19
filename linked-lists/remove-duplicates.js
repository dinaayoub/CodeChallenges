function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  if (!head) return null;
  let current = head;
  while (current.next) {
    if (current.next.data === current.data)
      current.next = current.next.next;
    else current = current.next;
  }
  return head;
}

// let head = new Node(3);
// let tail = head;
// tail.next =  new Node(9);
// tail = tail.next;
// [3, 9, 9, 11, 11, 11, 11, 89
// 89
// 100
// 100
// 101
// 102
// 103
// 108
// 200
// 250
// 250
// 250
// 250
// removeDuplicates(head);