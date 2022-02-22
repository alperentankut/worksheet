// console.log(this); //this burda üzerinde bulunduğumuz obje anlamına geliyor. Örneğin burda js de en genel obje olan windows objesi üzerinde
//olduğumuz için console a window yazdırılacak.


//## Alert ##

// const cevap = confirm("Emin misiniz ?");

// console.log(cevap); //Emin misiniz sorusuna evet dediğimizde console a true yanıtı döner.

// if (cevap == true){
//     console.log("Sil gitsin");
// }

// else {
//     console.log("Silme");
// }

// const cevap = prompt("2 + 2 = ?")

// // console.log(cevap);
// // console.log(typeof cevap);

// if(cevap == "4"){
//     console.log("Doğru cevap");
// }
// else{
//     console.log("Yanlış cevap");
// }

let value ;

// value = window.location;
// value = window.location.host;
// value = window.location.hostname;
// value = window.location.port;
// value = window.location.href


// if(confirm("Sayfa yenilensin mi ?")){

//     window.location.reload();

// }

// else {
//     console.log("Sayfa yenilenmedi")
// }

// value = window.outerHeight; //Bütün pencerenin uzunluğunu hesaplıyor. Bütün pencere dahil oluyor. 
// value = window.innerHeight; //Bunda da simge durumuna küçült , kapat gibi elemanların olduğu kısmı dahil etmeden yüksekliği buluyor.

value = window.scrollX; // bu da scrollumuzu ne kadar kaydırdığımızı gösteriyor.

console.log(value);
