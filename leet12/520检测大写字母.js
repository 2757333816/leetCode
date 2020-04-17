// 给定一个单词，你需要判断单词的大写使用是否正确。
// 我们定义，在以下情况时，单词的大写用法是正确的：
// 全部字母都是大写，比如"USA"。
// 单词中所有字母都不是大写，比如"leetcode"。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
// 否则，我们定义这个单词没有正确使用大写字母。

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
	// 字母全是小写或者全是大写时：true
	if (word === word.toLowerCase() || word === word.toUpperCase()) {
		return true
	}
	for (let i = 1; i < word.length; i++) {
		// charAt:返回指定位置的字符
		if (word.charAt(i) !== word.charAt(i).toLowerCase()) {
			return false
		}
	}
	return false
};
