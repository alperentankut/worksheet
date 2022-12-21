var twoSum = function(nums , target){
    let result =[]
    for(let i=1 ; i<nums.length ; i++){
        for(var el of nums) {
            if(i !== nums.indexOf(el)){
                if(nums[i] + el == target)
                result.push(i,nums.indexOf(el))
                result.splice(2)
            }
            
        };
    }
   
    return result
}
console.log(twoSum([2,6,4,2,88,6,55] , 90))





// [2,7,11,5]  target = 16