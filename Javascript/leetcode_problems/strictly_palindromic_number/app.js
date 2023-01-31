var isStrictlyPalindromic = function(n){
    let temp = new Number
    let num = "";

    for(i = 2 ; i<=9;){
        num += String(n%i);
        temp = Math.floor(n/i)
        while(temp>=i){
            num += String(temp%i)
            temp = Math.floor(temp/i)
        }
        if(temp < i ){
            num += String(temp)
            temp = new Number
        }
        let numReverse = [...num].reverse().join("")
        if(parseInt(num) === parseInt(numReverse)){
            i++
        }
        if(parseInt(num) === parseInt(numReverse) && i === 9 ){
            return true
        }
        else{
            return false
        }
    }
    
}


console.log(isStrictlyPalindromic(9));
