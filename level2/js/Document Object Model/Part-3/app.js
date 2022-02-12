// ##Elementi Id'ye göre seçme##


let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-id");

//##Element class'a göre seçme##

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

//##Tag'e göre seçme##

element = document.getElementsByTagName("div");


//##Query selector - CSS selector##

//Query selector sayfadaki sadece 1 elementi seçmeye yarıyor. Bu da bizim aradığımız ve sayfada bulduğu ilk element oluyor.

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-id");


element = document.querySelector(".list-group-item"); //Sayfada class'ı list-group-item olan ilk element geliyor.

element = document.querySelector("li");
element = document.querySelector("div");

//Biz sayfada id ile bir element çağırmak istiyorsak querySelector mantıkli bir tercih olabilir fakat birden fazla sayıda bulunan
//bir class seçmek istersek bunun için querySelectorAll etiketini kullanmamız gerekir.

element = document.querySelectorAll(".list-group-item"); //Bize node list dönüyor. Arraylere benziyor.




console.log(element);