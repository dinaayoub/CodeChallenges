/* https://leetcode.com/problems/robot-bounded-in-circle/ 

Runtime: 84 ms, faster than 47.18% of JavaScript online submissions for Robot Bounded In Circle.
Memory Usage: 39.4 MB, less than 24.66% of JavaScript online submissions for Robot Bounded In Circle.

*/

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let startingPosition = [0, 0];
  let currentPosition = startingPosition;
  let currentDirection = 0; //0 for north.

  let go = {
    0: (x, y) => [x, y + 1], //zero is north. go north means increment y axis by 1
    1: (x, y) => [x - 1, y], //1 is west, go west means decrement x axis by 1
    2: (x, y) => [x, y - 1], //2 is south, go south means decrement y axis by 1
    3: (x, y) => [x + 1, y]  //3 is east, go east means increment x axis by 1
  }

  for (let j = 0; j < 4; j++) {
    // console.log(`------------------- iteration ${j} -------------------`);
    //loop at most 4 times
    for (let i = 0; i < instructions.length; i++) {
      //implement the instructions
      if (instructions[i] === "G") {
        // console.log('go')
        currentPosition = go[currentDirection](currentPosition[0], currentPosition[1]);
      }
      else if (instructions[i] === "L") {
        // console.log('turn left');
        if (currentDirection === 3)
          currentDirection = 0;
        else
          currentDirection++;
      }
      else //array[i] must be "R"
      {
        // console.log('turn right');
        if (currentDirection === 0)
          currentDirection = 3;
        else
          currentDirection--;

      }
      // console.log(currentPosition);
    }
    //if they end at 0,0, return true
    if (currentPosition[0] === 0 && currentPosition[1] === 0)
      return true;
  }
  return false;

};

console.log(isRobotBounded("GRGLGRGR"));
console.log(isRobotBounded("RGLGRG"));
console.log(isRobotBounded("RGGGLGRG"));
console.log(isRobotBounded("RGGGLGLGGLG"));
console.log(isRobotBounded("GL"));
console.log(isRobotBounded("GG"));
console.log(isRobotBounded("GGLLGG"));

