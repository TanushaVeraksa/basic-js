const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let tmp = [];
  for(let i = 0; i<[...str].length; i++) {
      let arr = [...str];
      arr.splice(i, 1);
      tmp.push(+arr.join(''))
  }
  return Math.max.apply(null, tmp);
}

module.exports = {
  deleteDigit
};
