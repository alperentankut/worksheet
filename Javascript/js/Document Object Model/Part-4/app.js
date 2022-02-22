const element = document.querySelector("#clear-todos");


// Element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent); //html etiketleri olmadan sadece yazı kısmını almamızı sağlıyor.
// console.log(element.href);
// console.log(element.style);

//## Style ve element özelliklerini değiştirme ##


// element.className = "btn btn-warning";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank"

// element.textContent = "Sil";
// element.innerHTML = "<span style = 'color : white '> Silin </span>"


let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)")
element2 = document.querySelectorAll("li:nth-child(odd)") // odd yazdığımız zaman 1-3-5-7 şeklindeki elementlerimiz çağırılacak.
element2 = document.querySelectorAll("li:nth-child(even)") // even yazdığımızda da çift olan 0-2-4 şeklindeki elementler çağırılacak.
//Burda li lerin arasında 2. çocuğu çağırmış oluyoruz.

element2.forEach(function(el){
    el.style.color = "red"
})



// const elements = document.querySelectorAll(".list-group-item");

// elements.forEach(function(el){
//      el.style.color = "red"
//      el.style.background = "yellow"
//   });

//forEach metoduyla tüm li lerde gezindik ve color = red uygulamış olduk.


console.log(element2);
// console.log(element);
