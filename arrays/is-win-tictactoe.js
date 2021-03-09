/*
Determine if a 2 dimensional array of size NxN that represents a tic-tac-toe board is in a winning state. The 2 players are represented by a 1 or a 0 for their play on the board.  A win consists of a row, column, or diagonal being all 0's or all 1's
*/


//Implement the isWin function



const board = [
  [0, 1, 0],
  [1, 0, 0],
  [1, 1, 1]
];

const board2 = [
  [1, 0, 1],
  [1, 0, 1],
  [1, 0, 0]
];

const board3 = [
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 0],
];

const board4 = [
  [0, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1],
];

const board5 = [
  [1, 0, 0],
  [0, 1, 1],
  [1, 0, 0]
];

function isWin(board) {
  let win = false;
  let i = 0;
  let j = 0;
  //loop on each row to check if they're all equal
  //this is O(n^2) time and O(1) space
  for (i = 0; i < board.length; i++) {
    for (j = 1; j < board.length; j++) {
      if (board[i][j] === null || board[i][j] !== board[i][j - 1])
        break;
      else if (j === board.length - 1)  //win condition met
        return true;
      //otherwise, just keep going.
    }
  }

  //loop on each column to check if they're all equal

  for (j = 0; j < board.length; j++) {
    for (i = 1; i < board.length; i++) {
      if (board[i][j] === null || board[i][j] !== board[i - 1][j])
        break;
      else if (i === board.length - 1) //win condition?
        return true;
    }
  }

  //checks 1,1 and 2,2 and 3,3.... etc diagonal starting from top left
  for (i = 1; i < board.length; i++) {
    if (board[i][i] === null || board[i][i] !== board[i - 1][i - 1])
      break;
    else if (i === board.length - 1)
      return true;
  }

  //checks (for n=5) 4,0, 3,1, 2,2, 1,3, 0,4 
  /*
  first iteration, i=0, cross = 5-1-0 = 4 check [0,4] against [1,3]
  second iteration i=1, cross = 3 check [1,3] against [2,2] 
  third i=2, cross = 2 check [2,2] against [3,1]
  fourth i=3 cross = 1 check [3,1] against [4,0] 
  */

  for (i = 0; i < board.length - 1; i++) {
    let cross = board.length - 1 - i;
    if (board[i][cross] === null || board[i][cross] !== board[i + 1][cross - 1])
      break;
    else if (i === board.length - 2)
      return true;
  }

  return win;
}



console.log(isWin(board));
console.log(isWin(board2));
console.log(isWin(board3));
console.log(isWin(board4));
console.log(isWin(board5));