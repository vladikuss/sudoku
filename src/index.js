module.exports = function solveSudoku(matrix) {

  function isValid(number, row, col) {
    if (matrix[row].includes(number)) {

      return false;
    };

    for (let rowX = 0; rowX < 9; rowX++) {
      if (matrix[rowX][col] === number) {

        return false;
      };
    };

    let startR;
    let startC;

    if (row < 3) {
      startR = 0;
    } else if (row < 6) {
      startR = 3;
    } else {
      startR = 6;
    };

    if (col < 3) {
      startC = 0;
    } else if (col < 6) {
      startC = 3;
    } else {
      startC = 6;
    };

    for (let rowX = 0; rowX < 3; rowX++) {
      for (let colX = 0; colX < 3; colX++) {
        if (matrix[rowX + startR][colX + startC] === number) {

          return false;
        };
      };
    };

    return true;
  };

  for (let row = 0; row < 9; row++) {

    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        for (let numToAdd = 1; numToAdd <= 9; numToAdd++) {
          if (isValid(numToAdd, row, col)) {

            matrix[row][col] = numToAdd;
            solveSudoku(matrix);
          };
        };

        let flag = true;

        for (let i = 0; i < 9; i++) {
          if (matrix[i].includes(0)) flag = false;
        };

        if (flag) return matrix;

        matrix[row][col] = 0;
        return false;
      };
    };
  };


  return matrix;
};
