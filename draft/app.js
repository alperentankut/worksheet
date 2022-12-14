var rob = function(nums){
    let toplam = 0;
    for(let i = 0 ; i<nums.length ; i++){
        if(i%2 == 0){
            toplam = nums[i] + toplam
            
        }
    }
    return toplam
    
}

console.log(rob([1,3,5,7]))
