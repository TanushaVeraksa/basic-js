const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    let resArr = [...arr];
    let length = resArr.length;
    let n = 0;
   if(!Array.isArray(arr)) {
     throw new Error("'arr' parameter must be an instance of the Array!")
   }
   while(n <= length) {
     if(resArr[n] === '--double-next') {
        resArr.splice(n, 1, resArr[n+1]);
     }
     if(resArr[n] === '--double-prev') {
        resArr.splice(n, 1, resArr[n-1]);
     }
     if(resArr[n] === '--discard-next') {
       //  resArr.splice(n, 2);
       //  n--;
       resArr[n] = undefined;
       resArr[n + 1] = undefined;
     }
     if(resArr[n] === '--discard-prev') {
       //  if(resArr[n-1] === undefined) {
       //    resArr[n] = undefined;
       //    continue;
       //  }
       //  resArr.splice(n-1, 2);
       //  n--;
        resArr[n] = undefined;
        resArr[n - 1] = undefined;
     }
     n++;
  }
  return resArr.filter((elem) => elem != undefined);
 }
 catch(e) {
   throw new Error("'arr' parameter must be an instance of the Array!")
 }
}

module.exports = {
  transform
};
