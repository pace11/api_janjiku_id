const CryptoJS = require("crypto-js");

/**
 * function to generate UUID
 */
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * function to generate encrypt with cryptojs
 */
function encryptAES(word) {
  return CryptoJS.AES.encrypt(word, "BE_TEST").toString();
}

/**
 * function to generate decrypt with cryptojs
 */
function decryptAES(word) {
  let bytes = CryptoJS.AES.decrypt(word, "BE_TEST"),
    originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}

module.exports = {
  uuid: uuidv4,
  encryptAES: encryptAES,
  decryptAES: decryptAES,
};
