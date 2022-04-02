const [a_start, a_end] = ["a".charCodeAt(0), "z".charCodeAt(0)];
const [n_start, n_end] = ["0".charCodeAt(0), "9".charCodeAt(0)];

/**
 * Clamps a number by returning the number if it
 * is greater than or equal to the `min` and less
 * than or equal to the `max`.
 *
 * If the number is less than the `min`, return `min`.
 *
 * If the number is greater than the `max`, return `max`.
 * @param {number} num The number to clamp
 * @param {number} min The minimum value allowed
 * @param {number} max The maximum value allowed
 * @returns {number}
 */
const clamp = (num, min, max) => Math.min(Math.max(min, num), max);

/**
 * Checks that a character is in uppercase
 * @param {string} char The character to check
 */
const isUpperCase = (char) => char === char.toUpperCase();

/**
 * Checks that a character is an alphabet
 * @param {string} char The character to check
 */
const isAlpha = (char, code = char.toLowerCase().charCodeAt(0)) =>
  clamp(code, a_start, a_end) === code;

/**
 * Checks that a character is numeric
 * @param {string} char The character to check
 */
const isNum = (char, code = char.charCodeAt(0)) =>
  clamp(code, n_start, n_end) === code;

/**
 * Compute the resultant character from rotating a alpha `char` by the given `factor`
 * @param {string} char The character to rotate by a factor
 * @param {number} factor The factor by which to rotate a character
 * @returns {string}
 */
function getRotatedAlphaChar(char, factor) {
  const len = 26;
  const pos = char.toLowerCase().charCodeAt(0) - a_start;
  const rotatedPos =
    factor > len ? (pos + (factor % len)) % len : (pos + factor) % len;
  const rotatedChar = String.fromCharCode(a_start + rotatedPos);
  return isUpperCase(char) ? rotatedChar.toUpperCase() : rotatedChar;
}

/**
 * Compute the resultant character from rotating a numeric `char` by the given `factor`
 * @param {string} char The character to rotate by a factor
 * @param {number} factor The factor by which to rotate a character
 * @returns {string}
 */
function getRotatedNumChar(char, factor) {
  const len = 10;
  const pos = char.charCodeAt(0) - n_start;
  const rotatedPos =
    factor > len ? (pos + (factor % len)) % len : (pos + factor) % len;
  return String.fromCharCode(n_start + rotatedPos);
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
