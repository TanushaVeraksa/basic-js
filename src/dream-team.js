const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let res = [];
  if(Array.isArray(members)) {
    members.forEach((elem) => {
   if(typeof elem === 'string') {
      let str = elem.trim().toUpperCase()
      res.push(str[0])
   }
})
} else {
return false;
}
return typeof res.sort().join('') === 'string' ? res.sort().join('') : false;
}

module.exports = {
  createDreamTeam
};
