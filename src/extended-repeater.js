const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  function h(add, separator, length=1) {
    let s = separator === 'undefined' ? '|' : separator;
    let res = '';
    for(let i = 0; i<length; i++) {
      if(add === 'undefined') {
        res += s;
      } else {
        res += add + s;
      }
    }
    return res.split(s).filter((elem)=> elem != '' && elem != 'undefined').join(s);
  }
  function h2(str, separator, curr, length=1) {
    let s = separator === 'undefined' ? '+' : separator;
    let tmp = curr.split(s);
    let res = '';
    for(let i = 0; i<length; i++) {
      if(tmp[i] === undefined) {
        res +=  str + s;
      } else {
        res += str + tmp[i] + s;
      }
    }
    return res.split(s).filter((elem)=> elem != '' && elem != 'undefined').join(s);
  }
  function h3(str, separator, curr, length) {
    let s = separator === 'undefined' ? '+' : separator;
    let tmp = curr.split(s);
    let res = '';
    for(let i = 0; i<length; i++) {
        res += str + tmp[0] + s;
    }
    return res.split(s).filter((elem)=> elem != '' && elem != 'undefined').join(s);
  }
  let current = h(String(options.addition), String(options.additionSeparator), options.additionRepeatTimes);
  let sec = h(current, String(options.separator), options.repeatTimes);
  let res = h2(String(str), String(options.separator), sec, options.repeatTimes);
  if(!options.separator) {
     res = h3(String(str), String(options.separator), current, options.repeatTimes);
  }
  return res;
}

module.exports = {
  repeater
};
