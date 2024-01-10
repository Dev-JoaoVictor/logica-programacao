// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const first = Number(array1.join(''))
  const second = Number(array2.join(''))

  return first + second
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const palindrome = String(value).split('').reverse().join('');
  return String(value) == palindrome ? true : false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  if (!Boolean(input)) {
    return 'Required field'
  } else if (!Boolean(Number(input))) {
    return 'Must be a number besides 0'
  } else {
    return ''
  }
}
