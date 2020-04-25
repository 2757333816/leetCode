// 给定两个数组，编写一个函数来计算它们的交集。
// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	// Array.from()从一个类似数组或可迭代对象创建一个新的
	// 将数组放在一起，set用来去重
	let uNums1 = Array.from(new Set(nums1));
	let uNums2 = Array.from(new Set(nums2));
	let rsArr = [];
	for (let i = 0; i < uNums1.length; i++) {
		for (let j = 0; j < uNums2.length; j++) {
			if (uNums1[i] === uNums2[j]) {
				rsArr.push(uNums1[i])
			}
		}
	}
	return rsArr
};
