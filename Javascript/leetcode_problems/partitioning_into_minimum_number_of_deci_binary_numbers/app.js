var minPartitions = function(n){
    let temp1 = 0;
    let temp2 = 0;
    if(n.length === 1){
        return parseInt(n[0])
    }
    else{
        for(i = 0 ; i<n.length ; i++){
            if(parseInt(n[i]) >= parseInt(n[i+1])){
                temp1 = parseInt(n[i]);
            }
            else if(parseInt(n[i]) < parseInt(n[i+1])){
                temp1 = parseInt(n[i+1])
            }
            if(temp1 >= temp2){
                temp2 = temp1
            }
            else{
                continue
            }
        }
    }
    return temp2
}

// Second solutions

// var minPartitions = function(n){
//     let arr = []
//     for(i = 0 ; i<n.length ; i++){
//         arr.push(parseInt(n[i]))
//     }
//     arr.sort(function(a , b){
//         return b-a
//     })
//     return arr[0]
// }


