/**
 * 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var str = n.toString()
    var sum = 0 //和
    var total = 1 //乘积
    for(let i = 0;i < str.length; i++) {
        sum = sum + parseInt(str[i])
        total = total * parseInt(str[i]);
    }
    return total-sum
};