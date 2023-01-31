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
        console.log(temp)
        let numReverse = [...num].reverse().join("")
        if(parseInt(num) === parseInt(numReverse)){
            i++
        }
        else{
            break
        }
    }
    return num
}


console.log(isStrictlyPalindromic(9));
