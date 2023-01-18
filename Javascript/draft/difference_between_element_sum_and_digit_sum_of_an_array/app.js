var differenceOfSum =function(nums){
    let firstCount = 0
    let secondNums = 0
    for(i = 0 ; i<nums.length ; i++){
        firstCount = firstCount + nums[i];
        if(nums[i]%10 == nums[i]){
            secondNums += nums[i]
        }
        else {
            secondNums += nums[i]%10
            secondNums += Math.floor(nums[i]/10)%10
            secondNums += Math.floor(nums[i]/100)%10
            secondNums += Math.floor(nums[i]/1000)%10
        }
    }
    return (firstCount - secondNums)  
}
differenceOfSum([1,15,6,3])
