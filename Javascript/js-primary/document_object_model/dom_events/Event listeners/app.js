// ## Event listeners ##

const filterInput = document.getElementById("todo");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit" , subFun);

function subFun(e){
    console.log("Gönderildi")

    e.preventDefault(); //bu kodu yazdığımızda normalde formumuzun default özelliği olan sayfa yenilemesini engellemiş oluyoruz. Bunu işlemlerimizin el altında kullanmamız
    //bizim için daha güvenli olacaktır.
};

//Yukardaki fonksiyon çalıştığında console da Gönderildi yazısı çok kısa bir süre görünüp kayboluyor. Bunun sebebi bu bi form olduğu için submit ettikten sonra hemen
//sayfamız yenileniyor.

//** */ filterInput.onfocus = function(e){
//     console.log(e); //Bu bize focus eventini gösteriyor.
//     console.log(e.type); //Eventin tipini yazdırıyoruz.
//     console.log(e.target); //Eventin nerde oluştuğunu görmek için.
//     console.log(e.target.placeholder);
//     console.log(e.target.className); //Çalıştığı yerin classını öğrenmek için kullanırız.
    
//     // console.log("Selam");
//** };


//-- filterInput.addEventListener("focus" , function(){
//     console.log("Selam");
// });

//Yukardaki iki yöntemde aynı çıktıyı veriyor.--


// console.log(filterInput);