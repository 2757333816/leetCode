// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
	let i = 0;
	let j = nums.length - 1;
	while (i < j) {
		while (nums[i] % 2) {
			i++
		}
		while (nums[j] % 2 == 0) {
			j--
		}
		if (i < j) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
	}
	return nums
};
