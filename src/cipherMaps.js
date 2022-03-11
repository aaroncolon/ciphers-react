const cipherMaps = (function() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let alphabetic = {},
      alphabeticReverse = {},
      alphabetic3 = {},
      alphabetic3Reverse = {},
      alphabetic6 = {},
      alphabetic6Reverse = {},
      alphabetic9 = {},
      alphabetic9Reverse = {}

  for (let i = 0; i < 26; i++) {
    alphabetic[alphabet.charAt(i)] = i + 1
    alphabeticReverse[alphabet.charAt(i)] = alphabet.length - i
    alphabetic3[alphabet.charAt(i)] = (i + 1) * 3
    alphabetic3Reverse[alphabet.charAt(i)] = (alphabet.length - i) * 3
    alphabetic6[alphabet.charAt(i)] = (i + 1) * 6
    alphabetic6Reverse[alphabet.charAt(i)] = (alphabet.length - i) * 6
    alphabetic9[alphabet.charAt(i)] = (i + 1) * 9
    alphabetic9Reverse[alphabet.charAt(i)] = (alphabet.length - i) * 9
  }

  return {
    alphabetic,
    alphabeticReverse,
    alphabetic3,
    alphabetic3Reverse,
    alphabetic6,
    alphabetic6Reverse,
    alphabetic9,
    alphabetic9Reverse,
  }
})()

export default cipherMaps
