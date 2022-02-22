// Fonksiyon Tanımlama

// function merhaba(name = "Bilgi yok", age = "Bilgi yok"){     //burdaki parantez içine bir değer göndereceksek onu yazıyoruz.
//     // if (typeof name === "undefined")  name = "Değer yok";
//     // if (typeof age === "undefined") age = "Değer yok"
//     console.log(`İsim : ${name} \nYaş : ${age}`);

// }


// merhaba("Alperen" , 25);  //Yukarda sadece fonksiyonumuzu tanımladık. Burda ise fonksiyonumuzu console a yazdırdık. Aslında fonksiyonu çağırdık.

// merhaba();

// // Yukarda fonksiyonu tanımlarken name ve age değerlerini bilgi yok şeklinde atarsak daha sonra fonksiyonu çağırırken değer girmezsek
// //otomatik olarak tanımladığımız değer yazacaktır.

// function square(x) {
//     return x * x;
// }
// function cube(x) {
//     return x * x * x;
// }

// let a = cube(square(12));



// console.log(a);


//return komutu fonksiyondan çıkan değeri çağırıldığı yere tekrar gönderiyor. Biz return kullanmadan işlemi yaptığımızda sadece console
//a yazdırılan bir değer oluyor. Fakat return dediğimizde fonksiyon çalıştığında çıkan sonuç çağırıldığı yere gidip o değişkenin değeri
//oluyor. Return aynı zamanda kendi bloğunda fonksiyonu sonlandıran bir ifadedir. Kendi bloğunda returnden sonra yazılan komutlar çalışmaz.


// ## Function expression ##


// const merhaba = function(name){
//     console.log("Merhaba" + name);
// }

// merhaba(" Alperen"); 
//burada fonksiyonumuz bir değişkene eşit. Değişkeni yazdığımız zaman direk fonksiyonumuz çalışıyor.


// ## Immediately İnvoked Funcion Expression (IIFE) ##

// (function(name){
//     console.log("Merhaba " + name)
// })("Alperen");

//Fonksiyonumuzu tanımladıktan hemen sonra parantez açıp göndereceğimiz değeri yazıyoruz. Fonksiyonumuz kendi içerisinde çalışıyor

const database = {
    host: "localhost",

    add: function () {
        console.log("Eklendi");
    },
    get: function () {
        console.log("Elde edildi");
    },

    update: function (id) {
        console.log(`ıd : ${id} Güncellendi `);
    },

    delete: function (id) {
        console.log(`ıd : ${id} Silindi `);
    }
}

console.log(database.host);

database.update(5);

database.add();