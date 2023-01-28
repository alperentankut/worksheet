var checkIfExist = function(arr){
    let result = 0;
    if(arr.length === 0){
        result = 0
    }
    else{
        for(i = 0; i<arr.length ; i++){
            for(j = 0 ; j<arr.length ; j++){
                if(arr[i] === 2 * arr[j] && i!==j){
                    result = 1;
                    break
                }
                else{
                    continue
                }
            }
        }
    }
    if(result === 1){
        return true
    }
    else{
        return false
    }
    
}
console.log(checkIfExist([-2,0,10,-19,4,6,-8]))
