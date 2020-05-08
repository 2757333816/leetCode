// 给定 n 个整数， 找出平均数最大且长度为 k 的连续子数组， 并输出该最大平均数。
// 示例 1:
// 输入: [1, 12, -5, -6, 50, 3], k = 4
// 输出: 12.75
// 解释: 最大平均数(12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75,

	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number}
	 */
	var findMaxAverage = function(nums, k) {
		let max = -Infinity,
			sum = 0
		//  Infinity 属性用于存放表示正无穷大的数值。
		// 先判断i的值是否是小于k，小于k先累加起来，之后的每次计算减去头部数再加尾部数，求出最大值，最后平均
		for (let i = 0; i < nums.length; i++) {
			if (i < k) {
				sum += nums[i]
				max = sum
				continue
			}
			sum = sum + nums[i] - nums[i - k]
			max = Math.max(sum, max)
		}
		return max / k
	};
