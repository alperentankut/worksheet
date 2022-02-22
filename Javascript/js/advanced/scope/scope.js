// Scope kavramı

// ## 1 - Global scope ## her yerden erişilebilen scope kavramıdır. 


// function(){

//     //function scope
// }


// if(){

//     //block scope
// }


//## global scope ##

var value1 = 10;
let value2 = 20;
const value3 = 30;




// function func(){
//     var value1 = 50;
//     let value2 = 60;
//     const value3 = 70;

//     console.log(value1,value2,value3);
// }

// func();

// console.log(value1,value2,value3);

//Biz ilk başta değişkenlerimizi global scope da tanımladık ve değerlerini yazdırdığımızda ilk başta verdiğimiz değerleri aldık
//fakat function scope da aynı değişkenlere farklı değer verip yazdırdığımızda bu sefer ikinci yazdığımız değerleri aldık.
//Yani biz function scope içinde aynı değişkenlere farklı değerler verebiliriz ama bu değerler sadece o fonksiyonun scope'unda
//geçerli olacaktır. Fonksiyon dışına çıktığımızda yine global scope'daki değerini alacaktır.


if(true){

    var a = 20;
    let b = 30;
    const c = 40;

}

console.log(a);
console.log(b);
console.log(c);

//Yukarda yazdırdığımız değerlerden console a sadece var ile oluşturduğumuz değişken yazdırılacaktır. Çünkü var ile oluşturduğumuz 
//değişkenler bulunduğu blok haricinde de o değerle işlem yapmaya elverişlidir. Fakat let ve constta durum aynı değil. Onlar sadece
//bulunduğu blok içerisinde aldığı değerlerle işleme elverişlidir. Blok dışında undefined mesajıyla karşılaşırız.

// örneğin biz if bloğu içinde yukardaki value1 value2 value3 değerlerimize yeniden farklı sayılarla değer atayıp console a yazdırsaydık
//let ve const ile atadığımız değerler blok ve global scope da atandığı şekilde yazacaktı (globalde 20,30 blokta 30,40) fakat var ile
//blokta atadığımız yeni değer globalde de geçerli olacaktı. Yani var ile atadığımız değer blok içinde atadığımız değer olacaktı ve blok
//dışında yazdırdığımızda da blok içindeki değeri yazılacaktı.

//Biz değiştirilmesini istemediğimiz veya projemizde çok önemli bir bilginin olduğu değişkenleri var ile tanımlamıyoruz.!!! 
