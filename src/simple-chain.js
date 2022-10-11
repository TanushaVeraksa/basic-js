const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],
  resultStr: [],
  getLength() {
     this.arr.push('( ' + this.arr.length + ' )')
     return this
  },
  addLink(value) {
     if(value === undefined) {
        this.arr.push('( )')
     }
    this.arr.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
     try {
        if(typeof position != 'number' || position <= 0 || position > this.arr.length) {
           this.arr = []
           throw new Error("You can't remove incorrect link!")
        }
        this.arr.splice(position - 1, 1)
        return this
     } catch(e) {
        throw new Error("You can\'t remove incorrect link!")
     }
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
     this.resultStr = this.arr.join('~~')
     this.arr = []
     return this.resultStr
  }
};

module.exports = {
  chainMaker
};
