// function getData(data) { //Promise objesi döndüren fonksiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){

//             if(typeof data === "string"){
//                 //Olumlu
//                 resolve(data);
//             }
//             else {
//                 //Olumsuz
//                 reject(new Error("Lütfen string bir değer giriniz."));
//             }
            
//             // resolve("Olumlu sonuç")
//             // reject("Olumsuz sonuç")
//         },5000) 

//     })
// }

// // getData("Merhaba").then(function(response){
// //     console.log(response);
// // })
// // getData("Merhaba").catch(function(err){
//     // console.log(err);
// // })

// getData(5)
// .then(response =>console.log("Gelen değer : " + response))
// .catch(err =>console.error(err));

// console.log(getData("Merhaba"));

function addTwo(number){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }
            else{
                //hata
                reject(new Error("Lütfen bir sayı giriniz."))
            }
        },3000)
    });
}
addTwo(2)
.then(response => 
    {console.log(response)
    return response+2;
}).then(response2 =>
    console.log(response2))
.catch(err => console.error(err))


//Olumlu dönüşümüzü yani verimizi resolve ile döndürüyoruz. Olumsuz dönüş
//lerimizi yani hatalarımızı ise reject ile gönderiyoruz. Bunlar javascriptte
//hazır olan iki fonksiyonumuz.
//Biz console a baktığımızda 5 saniyelik bekleme süremizde promiseStatus
//değerini pending olarak görüyoruz. İstek sonuçlandığında ise promiseStatus
//resolved olarak görünüyor. Promise value ise resolve fonksiyonu ile 
//döndüğümüz değer olacaktır. 
//reject ile ise olumsuz sonucumuzu döndürüyoruz. Consoleda ki uncaught
//hatasının sebebi ise bizim hatayı yakalamamış olmamızdan dolayı. Bu hataları
//ise then ve catch yapıları ile yakalıyoruz.
//Bizim statusumuz resolve olduğunda bu then bloğu çalışacak. 
//Fonksiyonumuzun içindeki response değeri olumlu bir sonuç döneceği için
//bu response bizim resolve değerimize eşit olacak. 5 saniye sonra resolve
//olduğunda response fonksiyonumuz çalışacak.
//catch ile de rejecti yani olumsuz değeri yakalamış oluyoruz.
//Biz yukarda catch ve then i birbirine bağlayıp beraber kullandık.
//javascriptin kendisinde bulunan Error objesiyle daha açık ve anlaşılır
//bir hata mesajı bastırabiliriz.
//console.error diyerek gerçekten bir hata mesajı olarak yazdırabiliriz.
//Yukardaki son satırda then ile promise leri art arda çalıştırdık ve promise 
//chain oluşturmuş olduk.
//!!! Biz promise chain oluşturduğumuzda birden fazla then kullanabiliriz
//fakat catch i yalnızca bi sefer kullanabiliyoruz.