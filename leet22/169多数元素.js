// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// 示例 1:
// 输入: [3,2,3]
// 输出: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	// 对数组进行排序
	nums.sort((a, b) => a - b)
	//   返回小于或等于一个给定数字的最大整数
	return nums[Math.floor(nums.length / 2)]
};
