const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  let res = n.split('-');
  for(let i =0; i<res.length; i++) {
    let tmp = res[i].split('');
    for(let j = 0; j<tmp.length; j++) {
      if(res[i].length == 2 && (letters.includes(tmp[j]) || numbers.includes(tmp[j]))) {
        return true
      } else {
        return false
      }
    }
  }
}
module.exports = {
  isMAC48Address
};
