const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const bombs = [];

  function getCount(row, column) {
    let count = 0;
    let r = row;
    let c = column;
    for(let x = -1; x<=1; x++) {
      for(let y = -1; y<=1; y++) {
        if(isBomb(r+y, c+x) && (row!=r+y || column!=c+x)) {
          count++;
        }
      }
    }
    return count;
  }

  function isBomb(row, column) {
    if(row < 0 || column < 0 || row >= matrix.length || column >= matrix.length) {
      return false;
    }
    if(matrix[row][column] === true) {
      return true;
    }
    return false;
  }

  for(let i = 0; i<matrix.length; i++) {
    let arr = [];
    for(let j = 0; j<matrix[i].length; j++) {
      arr.push(getCount(i, j))
    }
    bombs.push(arr)
  }
    return bombs;
}

module.exports = {
  minesweeper
};
