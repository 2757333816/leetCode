// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	var sum = 0;
	var str = num.toString();
	for (let i = 0; i < str.length; i++) {
		sum += (str[i]) * 1;
		if (sum >= 10) {
			sum -= 9
		}
	}
	return sum
};
