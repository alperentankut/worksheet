// Primitive


// var a = 10;
// var b = 3.14;

// console.log(typeof a); // typeof etiketi veri tipini yazdırır.
// console.log(typeof b); //Number veri tipi

// //String

// var name = "Alperen";
// console.log(typeof name);

//boolean


// var a = true;

// console.log(typeof a);


//null

// var a = null; //null a nın hiçbir değer taşımadığını vurgulamak için kullanılır. Ama typeof dediğimiz zaman object olarak karşımıza çıkıyor
// //bunun sebebi js deki bir bug
// console.log(typeof a);










// Reference veri tipi


// var a = [1,2,3]; //bu bir reference veri tipi.

// var b = a;



//reference veri tipinde bir değer atadığımızda bellekte bir yeri gösteriyor ve başka bir değere o değeri atadığımızda direk o değere gidiyor.
//örneğin yukarda b = a dediğimizde b aslında a nın değerini almıyor. a nın gösterdiği array içindeki sayıların değerini alıyor. Biz array
//içindeki değerleri [2,3,4] şeklinde değiştirirsek b nin değeri de [2,3,4] olacak. Fakat Primitive veri tiplerinde durum böyle değil. Örneğin;
// var a = 10;
// var b = a; dediğimiz zaman biz a yı 20 yapsak bile b nin değeri 10 olarak sabit kalacaktır. Primitive ve reference veri tipleri arasındaki
//fark budur