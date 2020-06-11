// 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
// 示例:
// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	let arr = [];
	let i = 0;
	let str = "";
	while (i < s.length) {
		arr.push(s.slice(i, 2 * k + i));
		i = 2 * k + i;
	}
	arr.forEach((item) => {
		if (item.length <= 2 * k && item.length >= k) {
			str +=
				item.slice(0, k).split("").reverse().join("") +
				item.slice(k, item.length);
		} else {
			str += item.split("").reverse().join("");
		}
	});
	return str;
};
