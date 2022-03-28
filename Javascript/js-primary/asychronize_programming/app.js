// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click" , function(){
    //XMLHttpRequest

    const xhr = new XMLHttpRequest();

    // xhr.onprogress = function(){
    //     console.log("Process işleniyor.." , this.readyState)
    // }

    xhr.onload = function(){ //Bu fonksiyon sadece response hazır olduğunda çalışacak
        if(this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText
        }
        //Bu komutla da aldığımız text dosyasını divimize yazdırdık
    }

    // xhr.onreadystatechange = function(){

    //     if(this.status === 200 && this.readyState == 4){
    //         //Response hazır
    //         console.log(this.responseText)
    //     }


    // }

    xhr.open("GET","example.txt",true) //Burda open fonksiyonuyla bağlantı açıyoruz. Sonrasında
    //hangi requesti yapacağımızı söylememiz gerekli (GET,POST,PUT,DELETE)
    //GET ile example.txt içerisinden bilgimizi alacağız. Sonrasında hangi
    //dosyadan alacağımızı dosya ismiyle yazıyoruz. Sonra ise bu işlemin
    //asenkron mu yoksa senkron mu olduğunu yazıyoruz. True değerini yani 
    //boolean bir değer girersem asenkron bi işlem olduğunu söylemiş oluyoruz.

    xhr.send();

});

//Bağlantıyı açtıktan sonra requestimizi send ile göndermemiz gerekiyor.
//biz yukarda get request yaptığımız için send içerisine herhangi bir string
//değer vermiyoruz. Ancak post yapsaydık biz server tarafına bir veri göndermek
//istediğimiz zaman post request kullanıyoruz. O zaman bir string göndermek
//zorunda kalacaktık. Herhangi bir string göndermediğimiz için , sadece değer
//almak istediğimiz için yukardaki gibi yazdık.

//--console da xhr objesini incelediğimizde readyState ve onreadystatechange
//isminde iki tane değerimiz var. readyState değiştiği zaman onreadystatechange
//fonksiyonumuz otomatik olarak çalışıyor.

//yukarda if ile yazdığımız koşullu durumda şunu demek istiyoruz ; bizim böyle
//bir urlmiz varsa yani status 200 e eşitse ve aynı zamanda readtState 4 olursa
//demek oluyor.

//onreadystatechange e fonksiyon atamak eski bir yöntem. Genelde bunu kullanmıyoruz
// onload kullanılarak daha kolay yapabiliyoruz. 

//bizim readyState imiz 4 olduğunda bize hata mesajı da gelmiş olabilir.
//ancak biz hata mesajı dönmeyen ve readyState i 4 olan durumu kontrol edebiliriz.
//zaten onload fonksiyonunda readyState 4 olacak. Biz sadece 200 e eşit olup
//olmadığını kontrol ediyoruz. Statusu da herhangi bir hata olmasın ve verimiz
//bize düzgün dönsün diye konrol ediyoruz.

//xhr.onprogress de kullanılabilir. Bu da readyState 3 olduğunda çalışan bir fonksiyon.
