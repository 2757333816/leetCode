/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
	A.splice(m, A.length, ...B)
	// 将m个数之后的元素全删除，添加B
	A.sort((a, b) => a - b)
	// 如果a>b,放在后面
};
