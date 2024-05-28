function generateNumberPassword(len) {
    if (len > 10) len = 10;
    len = len * -1;
    return Math.random().toString(36).slice(len);
  }
  
  function generateSymbolsPassword(len) {
    let password = "";
    let symbols =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
    for (let i = 0; i < len; i++) {
      password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
  }
  
  module.exports = { generateNumberPassword, generateSymbolsPassword };