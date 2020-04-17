// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 1.正则表达式
// var replaceSpace = function(s) {
//     return s.replace(/\s/g, '%20')
// };

/**
 * @param {string} s
 * @return {string}
 */

var replaceSpace = function(s) {
	let ans = ''
	for (let i = 0; i < s.length; ++i) {
		if (s[i] !== ' ') {
			ans += s[i]
		} else {
			ans += '%20'
		}
	}
	return ans
}
