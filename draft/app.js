var rob = function(nums){
    let total = 0;
    let secondTotal = 0;
    if(nums.length == 1){
        total = nums[0]
        return total
    }   
    else if(nums.length == 2){
        total = Math.max(nums[0] , nums[1])
        return total
    }
    else{
        for(let i = 0 ; i<nums.length ; i++){
            if(i%2 == 0){
                total =nums[i] + total;
            }
            else if(i%2 == 1){
                secondTotal = nums[i]+secondTotal; 
            }
        }
        if(secondTotal>total){
            return secondTotal
        }
        else{
            return total
        }
        
        
    }
}

console.log(rob([1,3,1]))
