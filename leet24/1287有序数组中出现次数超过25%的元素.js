// 给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。
// 请你找到并返回这个整数
// 示例：
// 输入：arr = [1,2,2,6,6,6,6,7,10]
// 输出：6

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
	// arr长度 <= 3, 取第一位。长度 > 3， arr[i]===arr[i+1], num1加一， arr[i]!==arr[i+1],num1为0
	if (arr.length <= 3) return arr[0]
	let num = Math.ceil(arr.length * 0.25);
	let num1 = 0
	for (let i = 0; i < arr.length - 1; i++) {
		arr[i] === arr[i + 1] ? num1++ : num1 = 0
		if (num === num1) {
			return arr[i]
		}
	}
};
