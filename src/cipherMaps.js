const cipherMaps = (function() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetic = {},
      alphabeticReverse = {},
      alphabetic9 = {},
      alphabetic9Reverse = {};

  for (let i = 0; i < 26; i++) {
    alphabetic[alphabet.charAt(i)] = i + 1;
    alphabeticReverse[alphabet.charAt(i)] = alphabet.length - i;
    alphabetic9[alphabet.charAt(i)] = (i + 1) * 9;
    alphabetic9Reverse[alphabet.charAt(i)] = (alphabet.length - i) * 9;
  }

  return {
    alphabetic: alphabetic,
    alphabeticReverse: alphabeticReverse,
    alphabetic9: alphabetic9,
    alphabetic9Reverse: alphabetic9Reverse
  };
})();

export default cipherMaps;
