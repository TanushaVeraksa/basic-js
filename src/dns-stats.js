const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let arr = domains;
  if(arr.length) {
    arr.unshift(arr[0].split('.').reverse()[0]);
  }
  for(let i = 0; i<arr.length; i++) {
    let count = 0;
    for(let j = 0; j<arr.length; j++) {
      if(arr[j].includes(arr[i])) {
        count++;
      }
    }
    if(i === 0) {
      res['.' + arr[i].split('.').reverse().join('.')] = count - 1;
    } else {
      res['.' + arr[i].split('.').reverse().join('.')] = count;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
