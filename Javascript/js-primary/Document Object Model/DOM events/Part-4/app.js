const filter = document.getElementById("filter");

//document.addEventListener("DOMContentLoaded" , function(e){
//  console.log("Sayfa Yüklendi..")
//});

//DOMContentLoaded sayfa yüklenmesi bittiğinde çalışan bir event.


//##Focus##

filter.addEventListener("focus" , function(e){
    console.log(e.type);
});

//##Blur##
filter.addEventListener("blur" , function(e){
    console.log(e.type);
});

//blur eventi focustan çıktığımız an çalışır.

//##Paste##

filter.addEventListener("paste" , function(e){
    console.log(e.type);
});

//Kopyaladığımız bir veriyi yapıştırdığımız zaman çalışıyor.

//##Copy##

filter.addEventListener("copy" , function(e){
    console.log(e.type);
});

//İnput içerisindeki bir veriyi kopyaladığımız zaman çalışıyor.

//##Cut##

filter.addEventListener("cut" , function(e){
    console.log(e.type);
});

//Kesme işlemi yaptığımızda çalışıyor.

//##Select##

filter.addEventListener("select" , function(e){
    console.log(e.type);
});

//İnputtaki herhangi bir veriyi seçtiğimizde çalışıyor.



