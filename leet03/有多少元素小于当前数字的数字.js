var smallerNumbersThanCurrent = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i++) {
        let cs = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[j]<nums[i]){
                cs++
            }
            arr.push(cs)
        }
    }
    return arr;
};