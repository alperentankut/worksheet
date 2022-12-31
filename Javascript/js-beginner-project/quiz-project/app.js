const trueAnswer = document.querySelectorAll(".answer")
const nextPage = document.getElementsByClassName("forward")

trueAnswer.forEach((answers) => {
   
   answers.addEventListener("click" , trueAns=> {
      if(answers.innerHTML === "AVT"){
         answers.classList.add("true")
         alert("Doğru cevap!!")
      }
      else{
         answers.classList.add("false")
         alert("Yanlış cevap")
      }
      function backDefault () {
         answers.classList.remove("true" , "false")
      }
      setTimeout(backDefault , 2000)
   })
   
    
})






