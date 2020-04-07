/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // i : 数组长度
    let i = nums.length
    // 优先遍历最后一个值，查找是否有对应的差
    while(i > 1) {
        let last = nums.pop()
        if (nums.indexOf(target - last) > -1) {
            // 返回数组下标
            return [nums.indexOf(target - last), nums.length]
        } 
        i--
    }
};