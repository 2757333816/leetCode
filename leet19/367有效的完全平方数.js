// 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
// 说明：不要使用任何内置的库函数，如  sqrt。
// 示例 1：
// 输入：16
// 输出：True

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	if (num <= 0) return false;
	if (num === 1) return true;
	for (let i = 2; i <= Math.floor(num / 2); i++) {
		if (i * i === num) {
			return true;
		}
	}
	return false;
};
