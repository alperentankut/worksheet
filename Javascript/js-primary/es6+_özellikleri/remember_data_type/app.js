// let a = "Alperen";
// let b = "Alperen";

// //Yukardakiler primitive (ilkel) veri tipleri.

// if (a === b) {
//     console.log("Eşit")
// }

// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// if (array1 === array2){
//     console.log("Eşit");
// }
// else {
//     console.log("Eşit Değildir")
// };

//Yukardaki sonucumuz false olarak dönecektir. Çünkü bunlar primitive veri
//tipi olmadığı için içindeki değerleri değil de bellekteki yerlerini 
//kıyaslıyor.
//Primitive veri tipinde değerler kıyaslanıyor fakat reference veri tiplerinde
//bellekteki yerleri kıyaslanıyor.

// const person1 = {
//     name : "Alperen",
//     age : 26
// }
// const person2 = {
//     name : "Alperen",
//     age : 26
// }

// if(person1.age === person2.age){
//     console.log("Eşit")
// }

const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set([1,2,3] , "Array")

// console.log(cities.get("Ankara"));
console.log(cities.get([1,2,3]))

//Biz yukarda get komutuyla yazdığımız kodda şunu yapıyoruz. ; 
//set komutunda biz Ankara'yı yani primitive bir veri tipi verdik
//bu get komutu mapin içinde bunu arıyor. Buna eşit bulunca bize
//cevap dönüyor. Ama reference tip bir değer verseydik ve Ankara yerine
//o reference tipin değerini yazsaydık undefined değerini alacaktık



