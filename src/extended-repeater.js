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
//  function repeater(str, options) {
//   let newStr = String(str);
//   let result = '';
//   if(options.separator === undefined) {
//     options.separator = '+';
//   }
//   if(options.additionSeparator === undefined) {
//     options.additionSeparator = '|';
//   }
//   if(options.repeatTimes === undefined &&  options.additionRepeatTimes === undefined) {
//     result = newStr + options.addition;
//   }
//   if(options.repeatTimes && options.additionRepeatTimes === undefined) {
//     for(let i = 0; i<options.repeatTimes; i++) {
//         result += newStr + options.separator;
//     }
//     result = result.split(options.separator).slice(0, options.repeatTimes).join(options.separator);
//   }
//   if(options.repeatTimes && options.additionRepeatTimes) {
//     let res1 = '';
//     for(let i = 0; i<options.additionRepeatTimes; i++) {
//         res1 += newStr + options.addition + options.additionSeparator;
//     }
   
//     res1 =  res1.split(options.additionSeparator).slice(0, options.additionRepeatTimes).join(options.additionSeparator);
//     let res2 = '';
//     for(let i = 0; i<options.repeatTimes; i++) {
//         res2 += res1 + options.separator;
//     }
//     result = res2.split(options.separator).slice(0, options.repeatTimes).join(options.separator);
//   }
//   return result;
// }

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
  function h2(str, separator, curr, length) {
    let s = separator === 'undefined' ? '+' : separator;
    let tmp = curr.split(s);
    let res = '';
    for(let i = 0; i<length; i++) {
      if(tmp[i] === 'undefined') {
        res +=  str + s;
      } else {
        res += str + tmp[i] + s;
      }
    }
    return res.split(s).filter((elem)=> elem != '' && elem != 'undefined').join(s);
  }
  let current = h(String(options.addition), String(options.additionSeparator), options.additionRepeatTimes);
  let sec = h(current, String(options.separator), options.repeatTimes);
  return h2(String(str), String(options.separator), sec, options.repeatTimes);
}

module.exports = {
  repeater
};
