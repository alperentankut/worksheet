//buttons

const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const clearBtn = document.querySelector(".clear")

//counter
const secondCounter = document.querySelector(".seconds");
const minuteCounter = document.querySelector(".minute");
const hourCounter = document.querySelector(".hour")
const dayCounter = document.querySelector(".day")

startBtn.addEventListener("click" , startCount)

let seconds = 00
let minutes = 0
let hours = 0
let days = 0

function startCount(){
    startBtn.disabled = true;
   
    let addInterval = setInterval(function(){
        seconds ++ ;
        if(seconds == 60){
            seconds = 0;
            minutes ++ ;
            if(minutes == 60){
                minutes = 0;
                hours ++ ;
                if(hours == 24){
                    hours = 0 ;
                    days ++ ;
                }
            }
        }

        secondCounter.textContent = `Seconds : ${seconds}` ;
        minuteCounter.textContent = `Minute : ${minutes}` ;
        hourCounter.textContent = `Hour : ${hours}` ;
        dayCounter.textContent = `Day : ${days}` ;
        
    },10)
        //Clear Button

    clearBtn.addEventListener("click" , function (){
        clearInterval(addInterval);
        seconds = 0
        minutes = 0
        hours = 0
        days = 0
        secondCounter.innerHTML = `Seconds : ${seconds}` ;
        minuteCounter.innerHTML = `Minute : ${minutes}` ;
        hourCounter.innerHTML = `Hour : ${hours}` ;
        dayCounter.innerHTML = `Day : ${days}` ;
        startBtn.disabled = false

    })

    //stop button

    stopBtn.addEventListener("click" , ()=>{
        clearInterval(addInterval)
        startBtn.disabled = false

    })
}







