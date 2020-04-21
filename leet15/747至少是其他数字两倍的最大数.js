// 在一个给定的数组nums中，总是存在一个最大元素 。
// 查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
// 如果是，则返回最大元素的索引，否则返回-1。

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = Math.max(...nums)//找到最大值
    let index = nums.indexOf(max)//最大值的下标
    nums = nums.filter( item => item * 2 > max)//根据filter对比每个数
    return nums.length > 1 ? -1 : index//返回结果
};