'use strict';

function sumOfMatrix(arrayOuter) {
    let newArray = [];
    for (var i = 0; i < arrayOuter.length; i++) {
        var sum = 0;
        for (var j = 0; j < arrayOuter[i].length; j++) {
            sum += arrayOuter[i][j];
        }
        newArray[i] = sum;
    }
    return newArray;
}

console.log(sumOfMatrix([
    [2, 3, 2],
    [4, 2, 2, 2],
    [2],
    [2, 2, 2, 2, 2, 2, 2],
    []
]));
