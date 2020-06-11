/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1.二分查找到等于当前值的索引，把索引赋值给 left，或者直到左指针大于等于右指针停下
// 2.判断 nums[left] 是否等于 target，不等，返回 0
// 3.从 left 指针的位置往两边找，看看这个数重复几次，返回
/*
  二分查找
*/
var search = function(nums, target) {
	let count = 0,
		n = nums.length,
		left = 0,
		right = n - 1;

	while (left < right) {
		let mid = (left + right) >> 1;
		if (nums[mid] === target) {
			left = mid;
			break;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	if (nums[left] !== target) return 0;

	// 找到起始位置, 从当前位置往两边找，看看重复几次
	let copy = left - 1;
	while (copy >= 0 && nums[copy] === target) {
		copy--;
		count++;
	}

	while (nums[left] === target && left < n) {
		left++;
		count++;
	}

	return count;
};
