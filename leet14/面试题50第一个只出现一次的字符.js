// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。
// 示例:
// s = "abaccdeff"
// 返回 "b
// s = "" 
// 返回 " "
// 限制：0 <= s 的长度 <= 50000

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
	for (let i = 0; i < s.length; i++) {
		if (s.lastIndexOf(s[i]) == s.indexOf(s[i])) {
			return s[i];
		}
	}
	return " ";
};
