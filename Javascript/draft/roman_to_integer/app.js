var romanToInt = function(s){
    let count = 0;
    let count2 = 0;
    let finalCount = 0;
    const roman = {
        "I" : 1 , 
        "V" : 5 ,
        "X" : 10 ,
        "L" : 50 , 
        "C" : 100 , 
        "D" : 500 , 
        "M" : 1000
    };
    // const greatestRoman = roman[s[0]]
    for(i = 0 ; i<s.length ; i++){
        if(roman[s[i]]<roman[s[i+1]]){
            count = (roman[s[i+1]] - roman[s[i]])
            i++
        }
        else if(roman[s[i]]>=roman[s[i+1]]){
            count = (roman[s[i]]);
        }
        else{
            count = roman[s[s.length-1]]
        }
        
        finalCount += count
    }
    return finalCount
}


console.log(romanToInt("DCXXI"))  //621
// else if(roman[s[i]]>=roman[s[i+1]]){
//     count += roman[s[i]];
// }