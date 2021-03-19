/*https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign */

function getNode(head, positionFromTail) {
  let currentNode = head;
  let count = 0;
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  };
  let numFromStart = count - positionFromTail;
  if (numFromStart > count) return null;

  currentNode = head;
  for (let i = 0; i < numFromStart - 1; i++) {
    currentNode = currentNode.next;
  }
  return currentNode.data;

}
