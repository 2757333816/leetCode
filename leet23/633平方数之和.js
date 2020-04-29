// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
// 示例1:
// 输入: 5
// 输出: True
// 解释: 1 * 1 + 2 * 2 = 5

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
	let i = 0,
		j = parseInt(Math.sqrt(c));
	// 返回一个数的平方根,
	while (i <= j) {
		let sum = i * i + j * j
		if (sum == c) {
			return true
		} else if (sum > c) {
			j--
		} else if (sum <= c) {
			i++
		}
	}
	return false
};
