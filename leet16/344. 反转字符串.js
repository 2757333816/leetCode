// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
// 示例 1：
// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   for(let i = 0;i < s.length/2;i++){
       [s[i],s[s.length-1-i]] = [s[s.length-1-i],s[i]]
   }   
}
// 通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。