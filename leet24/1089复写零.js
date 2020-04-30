// 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
// 注意：请不要在超过该数组长度的位置写入元素。
// 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
// 示例 1：
// 输入：[1,0,2,3,0,4,5,0]
// 输出：null
// 解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			arr.splice(i, 0, 0)
			// splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
			// Array.splice(start, deletecitem, addItem) 方法添加 0
			arr.pop()
			//当添加了一个元素，需要跳过一个index，否者一直添加 0
			i++
		}
	}
	return arr
};
