/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  const indices = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in indices) {
      return [indices[complement], i];
    }
    indices[nums[i]] = i;
  }
  return indices;
};

console.log(twoSum([3, 2, 4], 6)); // expected output: [1, 2]
