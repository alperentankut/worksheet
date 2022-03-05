

// let number1,number2;

arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

// console.log(number1,number2);

//-- Yukardaki eski yöntem ama destructingle daha kolay yapabiliriz.--


//Destructing

// const [number1,number2] = arr;

// console.log(number1,number2)

//Yukarda number 1 ve 2 direk arrayin 0 ve 1. indexine eşit olmuş oluyor.
//daha kısa olarak const etiketiyle yazdığımız kodu kullanabiliriz

//##Obje destructing##

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50,
// };

// const {a:number1,c:number2,e:number3} = numbers;

// console.log(number1,number2,number3);

//Yukarda eğer const {number1 , number2 , number3 } şeklinde yazsaydık
//undefined olacaktı. Direk objenin içindeki anahtar kelimeleri kullanmamız
//gerekiyor. Eğer objedeki anahtar kelimeyi değilde başka bir isimle kullanmak
//istiyorsak :isim şeklinde yazabiliriz.

//##Function Destructing##

// const getLangs = () => ["Python" , "Java" , "C++"];

// const [lang1,lang2,lang3] = getLangs();

// console.log(lang1,lang2,lang3);

//##Obje##

const person = {
    name:"Alperen Tankut",
    year:1996,
    salary:5000,
    showInfos : () => console.log("Bilgiler Gösteriliyor..")
}

const {name:isim , year:yıl , salary:maaş , showInfos:BilgileriGoster} = person;

console.log(isim,yıl,maaş);

BilgileriGoster();