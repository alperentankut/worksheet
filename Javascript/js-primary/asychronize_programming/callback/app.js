// Callbaack Fonksiyonlar


// const langs = ["Pyhton" , "Java" , "C++"];

// langs.forEach(function(lang){
//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click" , function(){
//     console.log("Tıklandı");
// });

//js geliştiricileri bu addEventListener'ları içine bir fonksiyon alacak
//şekilde yazmışlar. Veya yine setTimeOut fonksiyonlarımıza callback 
//fonksiyon gönderebiliyoruz.

function process1(){
    setTimeout(function(){
        console.log("Process 1")
    },3000)
}

function process2(){
    setTimeout(function(){
        console.log("Process 2")
    },2000)
    
}

process1();
process2();

//Biz bu fonksiyonları çağırdığımızda art arda çalışıyor. Ama biz process1
//e setTimeOut verdiğimizde ilk fonksiyonumuz 3 saniye sonra çalışacak.
//ve asenkron bir durum söz konusu olacak. İlk fonksiyonumuz 3 saniyeyi bek-
//leyecek fakat ikinci fonksiyonumuz bu 3 saniyeye beklemeyecek. Ve direk 
//olarak çalışacak