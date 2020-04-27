// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let low = 0;
	let high = nums.length - 1;
	while (low < high) {
		if (nums[low] + nums[high] < target) {
			low++
		} else if (nums[low] + nums[high] > target) {
			high--
		} else {
			return [nums[low], nums[high]]
		}
	}
	return -1
};
