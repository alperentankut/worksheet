var pivotInteger = function(n){
    let count = 0
    let arr = []
    let pivot;
    if(n == 1){
        pivot = 1
    }
    for(i = 0 ; i<=n ; i++){
        count = i + count
        arr.push(i)
    }
    for(j = 0 ; j<arr.length ; j++){
        if((count / j) == j){
           pivot = j
           break 
        }
        else{
            pivot = -1
        }
        
    }
    return pivot
};

console.log(pivotInteger(8))