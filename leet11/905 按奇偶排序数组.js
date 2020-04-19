// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
// 你可以返回满足此条件的任何数组作为答案。

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
	var B = new Array()
	for (let i = 0; i < A.length; i++) {
		if (A[i] % 2 == 0) {
			B.unshift(A[i])
		} else {
			B.push(A[i])
		}
	}
	return B
};

push
pop
shift
unshift
