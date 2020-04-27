// 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
// 示例 1:
// 输入: 16
// 输出: true

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
	while (num > 1) {
		num = num / 4;
	}
	if (num === 1) {
		return true;
	} else {
		return false;
	}
};
