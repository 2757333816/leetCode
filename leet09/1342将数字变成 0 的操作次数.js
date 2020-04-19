/**
 * @param {number} num
 * @return {number}
 * 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
 */
// var numberOfSteps = function(num) {
// 	let i = 0
// 	if (num === 0) {
// 		return i
// 	}
// 	while (num > 0) {
// 		num % 2 === 0 ? (num /= 2) : (num--)
// 		i++
// 	}
// 	return i
// }
var numberOfSteps2 = function(num) {
	var str = num.toString(2);
	return str.length + str.replace(/0/g, "").length - 1;
}
// console.log(numberOfSteps2(23))

var numberOfSteps3 = function(num) {
	return num > 1 ? 1 + (num % 2) + numberOfSteps(num >> 1) : num;
};
console.log(23>>1)
// 10111  
// 0001 0111
// 0000 1011
// 1*2^4+0*2^3+1*2^2+1*2^1
// 1*2^3+1*2^1+1*2^0
// 8+2+1 = 11
// 16+0+4+2=22
// 1234
// 1*1000+2*100+3*10+4*1
