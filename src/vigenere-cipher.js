const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    this.validator(message, key);
    let encryptStr = '';
    let messageStr = message.toUpperCase();
    let keyStr = this.createKeyMsg(messageStr, key);
    for(let i = 0; i<messageStr.length; i++) {
      if(!this.alphabet.includes(messageStr[i])) {encryptStr += messageStr[i]; continue;}
      let indexMsg = this.alphabet.indexOf(messageStr[i]);
      let indexKey = this.alphabet.indexOf(keyStr[i]);
      let shift = indexMsg + indexKey;
      if(shift >= this.alphabet.length) shift -= this.alphabet.length;
      encryptStr += this.alphabet[shift];
    }
    return this.direct ? encryptStr : encryptStr.split('').reverse().join('');
  }
  decrypt(message, key) {
    this.validator(message, key);
    let decryptStr = '';
    let cryptStr = message.toUpperCase();
    let keyStr = this.createKeyMsg(cryptStr, key);
    for(let i = 0; i<cryptStr.length; i++) {
      if(!this.alphabet.includes(cryptStr[i])) {decryptStr += cryptStr[i]; continue;}
      let indexMsg = this.alphabet.indexOf(cryptStr[i]);
      let indexKey = this.alphabet.indexOf(keyStr[i]);
      let shift = indexMsg - indexKey;
      if(shift < 0) shift += this.alphabet.length;
      decryptStr += this.alphabet[shift]; 
    }
    return this.direct ? decryptStr : decryptStr.split('').reverse().join('');
  }
  createKeyMsg(message, key) {
  let keyStr = '';
  let j = 0;
  for (let i = 0; i < message.length; i++) {
    if(this.alphabet.includes(message[i])){
      keyStr += key[j];
      j = (j === key.length - 1) ? 0 : j + 1;
    } else {
      keyStr += message[i];
    } 
  }
  return keyStr.toUpperCase();
  }
  validator(...elements) {
    elements.forEach((elem) => {
      if(!elem) throw new Error('Incorrect arguments!');
    })
  }
}

module.exports = {
  VigenereCipheringMachine
};
