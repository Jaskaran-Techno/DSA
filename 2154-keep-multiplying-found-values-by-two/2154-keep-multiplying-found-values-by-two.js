/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
  if (nums.includes(original) == false) return original;
  while (1) {
    if (nums.includes(original)) {
      original = original * 2;
    } else {
      return original;
    }
  }
};