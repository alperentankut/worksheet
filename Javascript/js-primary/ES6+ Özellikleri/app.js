// const merhaba = function(){
//     console.log("selam")
// };

// merhaba();

//--Arrow Function--


// const merhaba = () => {
//     console.log("Merhaba");
// }

// merhaba();

// const merhaba = (firstName) => {
//     console.log("Merhaba" , firstName);
// }

// merhaba("Alperen");

//Eğer fonksiyonumuz tek parametre alacaksa firstName i 
//parantez kullanmadan da yazabiliriz. Ayrıca fonksiyonumuz tek
//işlem yapacaksa süslü parantezleri de kullanmayabiliriz.

// const cube = function(x){
//     return x * x * x;
// };
// console.log(cube(4));

const cube = x => x*x*x

console.log(cube(3))

//Fonksiyonumuz yine tek bir işlem yaptığı için return e de gerek yok.