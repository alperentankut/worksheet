const content = document.querySelector(".content");
const button = document.querySelector("#send-button");
const getNum = document.getElementById("number");
const addArr = document.querySelector(".add-array")
const inputArea = document.querySelector(".input-area")
const arr = [];
const enteredNumber = document.querySelector(".entered-number")
const result = document.querySelector(".result")
const history = document.querySelector(".history-area")
const newNumber = document.createElement("p")
const resetBtn = document.querySelector(".reset-button")




function doubleİnt () {
    button.addEventListener("click" , ()=>{
        if(getNum.value === ""){
            alert("Lütfen sayı giriniz.")
        }
        else{
            arr.push(getNum.value)
            enteredNumber.innerHTML += `${getNum.value} , `
            getNum.value = " "
            result.innerHTML = " "
            
        }
        
    })
}

function getArray(){
    addArr.addEventListener("click" , ()=>{
        let toplam = 0
        
        newNumber.classList.add("current-result")
        arr.forEach((number)=>{
            if(isNaN(parseInt(number)) ){
                newNumber.innerHTML = "Lütfen bir sayı giriniz."
            }
            
            else{
                toplam = parseInt(number) + toplam
                newNumber.innerHTML=`Sayıların toplamı : ${toplam}`
            }
            
        })  
        if(arr.length < "1"){
            alert("Lütfen en az iki adet sayı giriniz.")
            location.reload()
        }  
        
        getNum.value = "" 
        
        const lastResult = document.createElement("p")
        lastResult.classList.add("history-number")
        lastResult.innerHTML = `${toplam}` 
        history.appendChild(lastResult)
        
        
        result.appendChild(newNumber)

    })
}

resetBtn.addEventListener("click" , ()=>{
    location.reload()
})



doubleİnt()
getArray()






