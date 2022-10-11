const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let N = +sampleActivity;
  if(N > 15 || N <= 0 || typeof sampleActivity !== 'string') {
    return false;
  }
  k = 0.693/HALF_LIFE_PERIOD;
  t = Math.log(MODERN_ACTIVITY/N) / k;
  return (typeof Math.ceil(t) != 'number') ? false:
          isNaN(Math.ceil(t)) ? false :
          Math.ceil(t);
}

module.exports = {
  dateSample
};
