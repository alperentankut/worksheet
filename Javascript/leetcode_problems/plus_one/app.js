var plusOne = function(digits){
    
    const newNumber = BigInt(digits.join("")) + BigInt(1)
    const newArray = [];
    newArray.push(newNumber)
    const strDigit = newArray.join("")
    let lastArray = []
    for(i = 0 ; i<strDigit.length ; i++){
        lastArray.push((parseInt(strDigit[i]))) 
    }
    return lastArray
}

console.log(plusOne([9,9]))

