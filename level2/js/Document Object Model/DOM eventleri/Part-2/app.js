//Klavye elementleri

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup" , change);

function change(e){
    header.textContent = e.target.value; //Burdaki işlemimizde yazdığımız harfleri dinamik olarak headerımıza ekliyor.
    // console.log(e.target.value); 
}

// !!! Yukarda input alanına yeni yazdığımız her harfte , sadece o harfi değilde yazılan bütün harfleri beraber alıyoruz. Yani bastığımız tuşları tek tek yazdırmıyor
// her tuşa basıldığında önceki basılanla beraber yazdırıyor.!!!


//keypress

//--keypresste klavyeye tuşa bastığımızda yapılmasını istediğimiz işlemi atıyoruz. Fakat sadece sayı ve harf tuşları geçerli. Diğer tuşlar işlevsiz.

// document.addEventListener("keypress" , run);

// function run(e){
//     // console.log(e.which); //Bastığımız tuşun ascii karşılığını yazdırıyor.
//     console.log(e.key); //Bu elementimiz de hangi tuşa bastıysak onu karakter olarak yazdırıyor.
//     // console.log("Selam");
// }

//keydown

// document.addEventListener("keydown" , run); //Bu sefer keypress'deki gibi sadece sayılar ve harfler değil bütün tuşlar console a yazdırılacak.

// function run(e){
//     // console.log(e.which); //Bastığımız tuşun ascii karşılığını yazdırıyor.
//     console.log(e.key); //Bu elementimiz de hangi tuşa bastıysak onu karakter olarak yazdırıyor.
    
// }


//keyup


// document.addEventListener("keyup" , run); //Tuşu bıraktığımızda tetikleniyor. Tuşa bastığımızda değil de tuştan elimizi çektiğimiz an yazdırılıyor.

// function run(e){
//     // console.log(e.which); //Bastığımız tuşun ascii karşılığını yazdırıyor.
//     console.log(e.key); //Bu elementimiz de hangi tuşa bastıysak onu karakter olarak yazdırıyor.
//     // console.log("Selam");
// }