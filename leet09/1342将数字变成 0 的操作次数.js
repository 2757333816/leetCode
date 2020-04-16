/**
 * @param {number} num
 * @return {number}
 * 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
 */
var numberOfSteps = function(num) {
	let i = 0
	if (num === 0) {
		return i
	}
	while (num > 0) {
		num % 2 === 0 ? (num /= 2) : (num--)
		i++
	}
	return i
}
