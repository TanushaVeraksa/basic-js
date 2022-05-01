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
  let separator = options.separator;
  let additionSeparator = options.additionSeparator;
  let strTmp = String(str);
  let addition = options.addition;
   if(options.separator === undefined) {
     separator = '+';
   }
  if(options.additionSeparator === undefined) {
    additionSeparator = '|';
  }

  if(options.separator === undefined) {
    separator = '+';
  }
  if(options.repeatTimes === undefined) {
    strTmp = strTmp + separator;
    return strTmp;
  }
  if(options.repeatTimes && options.additionRepeatTimes === undefined) {
    let tmp = strTmp + separator;
    for(let i = 0; i<options.repeatTimes - 1; i++) {
      tmp += strTmp + separator;
    }
    return tmp.split(separator).filter((elem) => elem != '').join(separator)
  }
  if(options.repeatTimes && options.additionRepeatTimes) {
    let resTmp = str + addition + additionSeparator;
    let tmp = ''
    for(let i = 0; i<options.additionRepeatTimes; i++) {
      tmp += resTmp;
    }
    let tmp1 = tmp.split(additionSeparator).filter((elem) => elem != '').join(additionSeparator)
    let tmp2 = '';
    for(let i = 0; i<options.repeatTimes; i++) {
      tmp2 += tmp1 + separator;
    }
    return tmp2.split(separator).filter((elem) => elem != '').join(separator);
  }
}

module.exports = {
  repeater
};
