// // --Karşılaştırm operatörleri--

// // <
// // >
// // <=
// // >=
// // ==
// // ===
// // !=
// // !==


// ## console.log(2 == 2); ##
// ## console.log("Java" == "C++"); ##
// ## console.log("2" == 2); ##   //javascriptte bir tarafta string değeri varsa karşılaştırırken diğer tarafta string değeriymiş gibi kabul edilir.
// // ve ona göre kıyaslanır. Normalde bu değerimiz false olmalı fakat bu sebepten dolayı true değerini alır. Bu durumun olmasını istemiyorsak
// // === oparatörünü kullanırız. Burdaki 3. eşittir tip kıyaslaması da yapacağı için false değeri dönecektir.
// ## console.log("2" === 2); ##

// ## console.log(2 != 3); ## //!= bu operatörümüz "eşit değil midir" operatörüdür. Değerler eşit değilse true değerini döndürür.

// //--Mantıksal bağlaçlar--

// // Not operatörü (!)

// ## console.log(!(2 == 2)); //Normalde true olması gereken değer not operatörü ile false oluyor. ##

// //And operatörü

// ## console.log((2 == 2) && ("Ali" == "Ali")); ## //And (&&) operatörü ile yazılan karşılaştırmalarda bir tanesi bile false olursa genel sonucumuz
// // false olur. Sonucun true çıkması için hepsinin true çıkması lazım

// //Or operatörü

// ## console.log((2 == 2) || ("Ali" == "Veli")); ## //En az bir tanesinin true olması , sonucun true çıkması için yeterli.


// //--Blok operatörleri--

// // if operatörü

// ## const error = false; ##

// ## if(error == true){  // Eğer bu blok false olursa hiçbir şey yazmayacak.
//     console.log("Hata oluştu..");
// } ##

// else{
//   ##  console.log("Hata oluşmadı..") ## //else bloklarında true ya da false gibi bir durum yazılmaz. İf in çalışmadığı durumlarda otomatik olarak
// //else operatörü çalışır.
// }

// const user = "AT";

// if(user === "AT"){
//  ##   console.log("Kullanıcı bulundu.") ##
// }
// else{
//   ##  console.log("Kullanıcı bulunamadı.") ##
// }

// const process = "1"

// if(process === "1"){
//   ##  console.log("İşlem 1"); ##
// }

// else if(process === "2"){
//   ##  console.log("İşlem 2"); ##
// }

// else if(process === "3"){
//   ##  console.log("İşlem 3"); ##
// }
// else if(process === "4"){
//   ##  console.log("İşlem 4"); ##
// }

// else {
//   ##  console.log("Geçersiz işlem.."); ##
// }

const number = 100;

// if (number === 100){
//     console.log("Sayı 100'e eşittir");
// }

// else {
//     console.log("Sayı 100'e eşit değildir")
// }


// //Ternary operator

// console.log(number == 100 ? "Sayı 100 e eşittir." : "Sayı 100 e eşit değildir"); //Yukarıdaki tek koşullu durumları daha kolay yazmak
// //için kullanıyoruz

if (number === 100) console.log("Sayı 100"); // eğer if bloğumuzda tek bir işlem yapacaksak süslü parantezleri kullanmadan bu şekilde bir yazım
//yapabiliriz.