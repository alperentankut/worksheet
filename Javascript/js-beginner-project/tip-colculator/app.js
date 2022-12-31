//---Selectors---
//All buttons

//Tip button

const tips = document.querySelector(".tip")
const allBtn = document.querySelectorAll(".btn")
const country = document.querySelector(".card-body")


//Result button

const calculateBtn = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset")


//Amount value

const bill = document.querySelector("#price");

let turkey = 0;
let germany = 10;
let france = 20;
let italy = 30;
let percentage;

country.addEventListener("click" , (e)=>{
    percentage = e.target.innerHTML


    if(percentage === "Turkey"){
        percentage = 0;
    }
    else if(percentage === "Germany"){
        percentage = 12;
    }
    else if(percentage === "France"){
        percentage=18;
    }
    else if(percentage === "Italy"){
        percentage = 21
    }
    else{
        percentage =parseInt(percentage)
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
    const tip = bill.value * percentage /100
    document.querySelector(".message-area").textContent = "Vermeniz gereken tutar : " + tip
    calculateBtn.disabled = true
    
       
})



resetBtn.addEventListener("click" , ()=>{
    window.location.reload()
})






