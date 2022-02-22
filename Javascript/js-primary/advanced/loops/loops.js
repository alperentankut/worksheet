// ## While döngüsü ##


// let i = 1;

// while(i < 10){

//     console.log(i);

//     i++; //Eğer bu komutu vermezsek döngümüz sonsuz döngü olur.

// }

// let i = 10;

// while(i > 0){
    
//     console.log(i);

//     // i--;

//     i -= 2;
// }

// ## Break ve continue ##


// let i = 0;

// while(i < 10){

//     console.log(i);

//     if (i == 5){
//         break;
//     }

//     i++;
// }


// let i = 10;

// while(i < 10){

//     if(i == 3 || i == 5){

//         i++;

//         continue; 

//         console.log(i);

//         // i++;

//     }

// }
//Yukardaki döngü sonsuz döngü olacaktır. Çünkü değerimiz 3 e geldiğinde tekrar tekrar başa dönüp kendini tekrarlayacak. Continue ifadesi
//çalıştığında döngünün devamı çalışmaz ve döngü başa döner. Bunu engellemek için arttırma değerimizi continue ifadesinden önce koymamız 
//gerekiyor.

// ## Do While ##

// let i = 0;

// do {

//     console.log(i);
//     i++;


// } while( i < 10);

// burda önce do bloğunda i yi bastırıyoruz sonrasında 1 arttırıyor ve while döngüsüne geliyor. Yani while koşulumuz sağlanmasa bile
//en az bir kere çalışmış olacak. Genelde çok kullanılmıyor.

// ## for ##

const langs = ["Javascript" , "Python" , "C++"] ;

// let index = 0;

// while(index < langs.length){

//     console.log(langs[index])

//     index++;

// }
// burda bu şekilde while döngüsüyle yazabiliriz.

// for(let index = 0;index<langs.length;index++){
   
//     console.log(langs[index]);

// }

//Önce döngümüzün değişkenini başlatıyoruz , sonra döngümüzün koşulunu yazıyoruz , sonrasında otomatik arttırma işlemini yazıyoruz.
//Döngü koşulı false olduğunda for döngümüz sonlanıyor.

//## forEach ##

// langs.forEach(function(lang,index){
//     console.log(lang,index)

// });

//forEach ile yukardaki for döngüsüyle yaptığımız işlemin aynısını yaptık. forEach arraydeki tüm elemanlarda gezin komutunu veriyor.
//bunların adı callback fonksiyonlarıdır. Bunların kaçıncı index olduğunu yazdırmak istersek ,index şeklinde ekleme yaparız.

// const users = [

//     {name:"Alperen",age:25},
//     {name:"Oguz",age:25},
//     {name:"Aykut",age:26}

// ];

// //Ben bu array değerlerinden sadece name değerlerini çekip yeni bir array oluşturmak istersem ;

// const names = users.map(function(user){

//     return user.name;


// });

// console.log(names);

//Yukarda map komutuyla user isimli yeni bir array oluşturuyoruz. Sonrasında bu arrayin her bir elemanı name ve age ikilisinden oluşuyor
//fakat biz sadece isimlerden oluşan bir array yapmak istediğimiz için yeni user arrayi içinden sadece name değerlerini almak için
//return user.name komutunu kullanıyoruz


// ## for in ##

const user = {
    name : "Alperen",
    age : 25
};

for (let key in user){

    console.log(key,user[key]);
}

//burda oluşturduğumuz objenin değerlerini yazdırıyoruz. Yukarda ilk başta name ve age değerlerini yazdıracak. Biz bunların karşılık geldiği
//değerleri de yazdırmak istersek user[key] şeklinde bi ekleme yaparız. Yani in komutu objenin içindeki değerleri yazdırıyor.

