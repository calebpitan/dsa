const ALPHA = "abcdefghijklmnopqrstuvwxyz".split("");
const NUMS = "0123456789".split("");

/**
 * Checks that a character is in uppercase
 * @param {string} char The character to check
 */
const isUpperCase = (char) => char === char.toUpperCase();

/**
 * Checks that a character is an alphabet
 * @param {string} char The character to check
 */
const isAlpha = (char) => ALPHA.includes(char.toLowerCase());

/**
 * Checks that a character is numeric
 * @param {string} char The character to check
 */
const isNum = (char) => NUMS.includes(char);

/**
 * Compute the resultant character from rotating a alpha `char` by the given `factor`
 * @param {string} char The character to rotate by a factor
 * @param {number} factor The factor by which to rotate a character
 * @returns {string}
 */
function getRotatedAlphaChar(char, factor) {
  const len = ALPHA.length;
  const pos = ALPHA.indexOf(char.toLowerCase());
  const rotatedPos =
    factor > len ? (pos + (factor % len)) % len : (pos + factor) % len;
  const rotatedChar = ALPHA[rotatedPos];
  return isUpperCase(char) ? rotatedChar.toUpperCase() : rotatedChar;
}

/**
 * Compute the resultant character from rotating numeric `char` by the given `factor`
 * @param {string} char The character to rotate by a factor
 * @param {number} factor The factor by which to rotate a character
 * @returns {string}
 */
function getRotatedNumChar(char, factor) {
  const len = NUMS.length;
  const pos = NUMS.indexOf(char);
  const rotatedPos =
    factor > len ? (pos + (factor % len)) % len : (pos + factor) % len;
  return NUMS[rotatedPos];
}

/**
 * Rotate each and every character in an `input` string by the given `rotationFactor`
 * @param {string} input The input string to rotate at every character
 * @param {number} rotationFactor The rotation factor for each char in input string
 * @returns {string}
 */
function rotationalCipher(input, rotationFactor) {
  // Write your code here
  let result = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (isAlpha(char)) {
      result += getRotatedAlphaChar(char, rotationFactor);
      continue;
    } else if (isNum(char)) {
      result += getRotatedNumChar(char, rotationFactor);
      continue;
    }
    result += char;
  }

  return result;
}

export { rotationalCipher };
