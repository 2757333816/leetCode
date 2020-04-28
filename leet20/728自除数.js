// 自除数 是指可以被它包含的每一位数除尽的数。
// 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
// 还有，自除数不允许包含 0 。
// 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。
// 示例 1：
// 输入： 
// 上边界left = 1, 下边界right = 22
// 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
	let arr = []
	// 创建一个空数组
	for (let i = left; i <= right; i++) {
		// 左边界开始，右边界结束
		if (i < 10) {
			// 小于10 的数直接满足自除数
			arr.push(i)
		} else if (i > 10) {
			let n = i.toString()
			// 转换为字符串，目的是进行每位数相除
			let flag = true
			for (let j = 0; j < n.length; j++) {
				if (i % n[j] != 0) {
					// 判断总数/每位数
					flag = false
				}
			}
			if (flag) {
				arr.push(i)
			}
		}
	}
	return [...arr]
	// 扩展运算符（...），用于把一个数组转化为用逗号分隔的参数序列，常用在不定参数个数时的函数调用，数组合并
};
