//--Event bubbling--

// document.querySelector(".container").addEventListener("click" , function(e){

//     console.log("div container");

// });
// document.querySelector(".card.row").addEventListener("click" , function(e){

//     console.log("card row");

// });
// document.querySelectorAll(".card-body")[1].addEventListener("click" , function(e){

//     console.log("card body");

// });

//!!! ## Bizim 3 tane iç içe divimiz olsun ve bu divlerin her birine ayrı ayrı click eventi atamış olalım. Biz en içteki divimize tıkladığımızda
//içteki divimize verdiğimiz event çalışıyor. Ama bu divimiz diğer iki divin içinde olduğu için diğer kapsayıcı divlerimize verdiğimiz
//eventlerde çalışmış oluyor. Yani içerden dışarıya doğru bir akış , baloncuklanma gerçekleşiyor. Eğer biz bu baloncuklanmanın olmasını
//istemezsek e.stopPropagation şeklinde bir kodla durdurabiliriz ## !!!


//--Event Capturing veya delegation--

//Biz bir dive event atadığımızda , örneğin click eventi olsun. Bu event atadığımız divde ve onun alt elementlerinde de çalışacak.
//yani biz biz direk eventi atadığımız dive değilde onun kapsadığı bir elemente tıkladığımızda da bu eventimiz çalışacak.
//bu da event capturing özelliğidir. Bu özellikle eklediğimiz yeni elementlere sürekli tekrardan event eklemek yerine en başta eklediğimiz
//event sayesinde otomatik olarak eklemiş oluyoruz. Dinamik olarak ekleme yapmak için bunu kullanmamız gerekli.

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click" , function(e){
    if (e.target.className === "fa fa-remove"){
        console.log("Silme İşlemi");
    }
    if (e.target.id === "filter"){
        console.log("Filtrelendi");
    }
    if (e.target.id === "clear-todos"){
        console.log("Temizlendi");
    }

    // console.log(e.target);
})

//Yukarıdaki fonksiyonlarda nereye tıklandığını görüp ona göre dinamik olarak işlem atayabiliriz.



