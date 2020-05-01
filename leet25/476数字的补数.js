// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
// 示例 1:
// 输入: 5
// 输出: 2
// 解释: 5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	let str = num.toString(2).split('')
	// 转换成数组 遍历替换
	for (let i = 0; i < str.length; i++) {
		if (str[i] == 0) {
			str[i] = 1
		} else {
			str[i] = 0
		}
	}
	return parseInt(str.join(''), 2)
};
