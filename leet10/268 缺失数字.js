// 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数

/**
 * @param {number[]} nums
 * @return {number}
 * 前n项进行求和与从1到n的数字之和相比，返回差值
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum1 = (n+1)*(n)/2;//前n项和
    let sum=0;
    for(let i=0;i<n;i++){//遍历所有的数字
        sum += nums[i];
    }
    return sum1-sum; //差值=前n项和-遍历和
};