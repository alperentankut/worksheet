//---Selectors---
//All buttons

const allBtn = document.querySelectorAll(".btn");



//Country Button
const turkeyBtn = document.querySelector(".turkey");
const germanyBtn = document.querySelector(".germany");
const franceBtn = document.querySelector(".france");
const italyBtn = document.querySelector(".italy")
const country = document.querySelectorAll(".country")

//Percent button

const tenBtn = document.querySelector(".ten");
const fifteenBtn = document.querySelector(".fifteen");
const twentyBtn = document.querySelector(".twenty");
const twentyFiveBtn = document.querySelector(".twenty-five");

//Result button

const calculateBtn = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset")
const result = document.querySelector(".message-area")

//Amount value

const bill = document.querySelector("#price");

//Country tip option

let Turkey;
let Germany;
let France;
let Italy;

country.forEach((selectCountry)=>{
    selectCountry.addEventListener("click" , ()=>{
        removeActiveCountry()
        selectCountry.classList.add("active-country")
        
        
        
    })
    function removeActiveCountry(){
        country.forEach((selectCountry)=>{
            selectCountry.classList.remove("active-country")
        })
        
    }
})
country.forEach((element)=>{
    if(element.className == "active-country"){
     console.log("aa")   
    }
})







allBtn.forEach((active)=>{
        active.addEventListener("click",()=>{
            removeActiveClass()
            active.classList.add("active");
        })
    })
    function removeActiveClass(){
    allBtn.forEach((active)=>{
        active.classList.remove("active")
    })
}


 
calculateBtn.addEventListener("click" , ()=>{
    removeActiveClass()
    const tip = bill.value
    result.innerHTML += "Vermeniz gereken tutar : " + tip
    calculateBtn.disabled = true   
})



resetBtn.addEventListener("click" , ()=>{
    window.location.reload()
})






