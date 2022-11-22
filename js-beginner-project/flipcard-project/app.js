const cardBody = document.querySelector(".container");
const cards = document.querySelectorAll(".card");
let word;
const trCard = document.querySelectorAll(".tr-card")



cardBody.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("card")){
        word = e.target.innerHTML;
    }

    if(word === "Car"){
        word = "Araba"
    }
    else if(word === "Pencil"){
        word = "Kalem"
    }
    else if(word === "Last Name"){
        word = "Soyad"
    }
    else if(word === "Dog"){
        word = "Köpek"
    }
    else if(word === "Cat"){
        word = "Kedi"
    }
    else if(word === "Watermelon"){
        word = "Karpuz"
    }
    else if(word === "House"){
        word = "Ev"
    }
    else if(word === "Book"){
        word = "Kitap"
    }
    else if(word === "Screen"){
        word = "Ekran"
    }
    else if(word === "Red"){
        word = "Kırmızı"
    }
    removeActiveClasses()

    e.target.innerHTML += `<div class="tr-card">${word}</div>`
    e.target.classList.add("active-class")

    if(e.target.classList.contains("active-class")){
        e.target.classList.remove("active-class")
    }
    
    
})

function removeActiveClasses(){cardBody.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("active-class")){
        e.target.classList.remove("active-class")
    }
})}

setTimeout(removeActiveClasses , 100)





