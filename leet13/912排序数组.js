// 给你一个整数数组 nums，请你将该数组升序排列。
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
	nums.sort((a, b) => {
		return a - b
	})
	return nums
};

// sort()  方法用于对数组的元素进行排序，并返回数组。默认排序顺序是根据字符串UniCode码。
// 因为排序是按照字符串UniCode码的顺序进行排序的，所以首先应该把数组元素都转化成字符串（如有必要），以便进行比较。
// 语法：arrayObject.sort(sortby);
// 参数sortby  可选，用来规定排序的顺序，但必须是函数。
// 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
// 若 a 等于 b，则返回 0。
// 若 a 大于 b，则返回一个大于 0 的值。