// Callback Fonksiyonlar


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

// function process1(callback){
//     setTimeout(function(){
//         console.log("Process 1")
//         callback();
//     },3000)
// }

// function process2(){
//     setTimeout(function(){
//         console.log("Process 2")
//     },2000)
    
// }

// process1(process2);



//Biz bu fonksiyonları çağırdığımızda art arda çalışıyor. Ama biz process1
//e setTimeOut verdiğimizde ilk fonksiyonumuz 3 saniye sonra çalışacak.
//ve asenkron bir durum söz konusu olacak. İlk fonksiyonumuz 3 saniyeyi bek-
//leyecek fakat ikinci fonksiyonumuz bu 3 saniyeye beklemeyecek. Ve direk 
//olarak çalışacak. En son yazdığımız naber yazısı ise diğerlerini beklemeden
//çalışacak. Bu bizim js de asenkron durumlara örnektir.

//Biz yukardaki durumda 1. fonksiyonun 2 den önce başlamasını istersek 
//process 1 in içine callback yazıyoruz. Son satırda process 1 in içine
//process2 yi yazıp yukardaki satırda callback yerine bu process2 yi göndermiş
//oluyoruz. Yani o callback bir fonksiyon öğesi olmuş oluyor. Sonrasında
//ilk satırda callback i çalıştırdığımızda önce process1 sonra process2
//çalışmış oluyor.

const langs = ["Pyhton" , "Java" , "C++"];

function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        })
    },1000);
}

addLang("Javascript" ,getAllLangs);



//Yukarda ikinci getAllLangs fonksiyonu addLang den önce çalışacağı için
//biz yeni veriyi eklesek bile console a yazdıracağımız fonksiyon önce 
//çalışacağı için anlamsız bir durum oluyor.