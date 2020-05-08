// 实现 strStr() 函数。
// 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
// 示例 1:
// 输入: haystack = "hello", needle = "ll"
// 输出: 2


var strStr = function(haystack, needle) {
	// return haystack.indexOf(needle);

	// 1. needle为空字符串， 此时直接返回0
	if (needle === '') return 0
	// 2.设定一个i,用来遍历haystack的字符，设定一个n为needle的长度。
	// 如果i在遍历时，i到i + n这个范围的字符和needle完全严格一致（ === ）那么就返回i值。
	// 如果i + n超过了haystack的长度，会出错。 所以要用 <= 。
	let n = needle.length;
	for (let i = 0; i + n <= haystack.length; i++) {
		if (haystack.slice(i, i + n) === needle) {
			return i;
		}
	}
	// 3.不存在则跳出循环，直接返回 - 1.
	return -1;
};
