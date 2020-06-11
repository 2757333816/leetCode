// 统计一个数字在排序数组中出现的次数。
// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let i = 0,
		j = nums.length - 1;
	while (nums[i] !== target && i < nums.length) {
		i++;
	}
	while (nums[j] !== target && j > -1) {
		j--;
	}
	if (j - i < 0) {
		return 0
	}
	return j - i + 1
};
