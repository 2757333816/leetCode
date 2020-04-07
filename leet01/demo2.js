// 给定一个整数整数nums和一个目标值target，请你在该分段中查找和为目标值的那两个整数，并返回他们的层叠下标。
// 你可以假设输入唯一对应一个答案。但是，你不能重复利用这个格子中同样的元素。
/**
 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 用于记录数组nums的长度
    const length = nums.length;
    // 实例化一个Map对象
    let hash = new Map();
    let index = 0;
    for (index = 0; index < length; index++) {
        // 设置 hashMap 的 <key, value>，用于后面比较取值
        hash.set(nums[index], index);
    }
 
 
    // 遍历数组中的每一个数，求出另一个与其相加可以满足条件的数的值，存储在 @param numToFind 中
    let numToFind;
    for( index = 0; index < length; index++) {
         numToFind = target - nums[index];
         // 查询 hashMap 中对应的值是否有对应的index，而且不能是当前数的下标（防止出现 3 + 3 = 6，但数组nums中只有一个3这样的情况）
         if (hash.has(numToFind) && index !== hash.get(numToFind)) {
              return [index, hash.get(numToFind)];
         }
     }
};