const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let res = str;
  str = '';
  for(let i =0; i<res.length; i++) {
     if(res[i] === res[i+1]) {
        count++;
     }
     if(res[i] != res[i+1]) {
        if(count === 1) {
           str += res[i];
        } else {
           str += count + res[i];
        }
        
        count = 1;
     }
  }
     return str;
}

module.exports = {
  encodeLine
};
