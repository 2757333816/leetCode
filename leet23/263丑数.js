// 编写一个程序判断给定的数是否为丑数。
// 丑数就是只包含质因数 2, 3, 5 的正整数。
// 示例 1:
// 输入: 6
// 输出: true
// 解释: 6 = 2 × 3

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
	if (num <= 0) return false
	while (num % 2 === 0) {
		num = num / 2;
	}
	while (num % 3 === 0) {
		num = num / 3;
	}
	while (num % 5 === 0) {
		num = num / 5;
	}
	return num === 1
};
