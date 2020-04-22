// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
// 示例 1:
// 输入: 27
// 输出: true

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	while (n >= 3) {
		n /= 3
	}
	if (n === 1) {
		return true
	} else {
		return false
	}
};
