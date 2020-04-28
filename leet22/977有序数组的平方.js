// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
// 示例 1：
// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
	// 1 .map:对数组的每个元素都遍历一次，同时返回一个新的值
	// 2 计算数的多少次幂用Math.pow(number, 多少次幂)
	// 3 排序
    return A.map(item=> Math.pow(item, 2)).sort((a,b)=>a-b)
};