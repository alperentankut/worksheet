//Ajax,callback , http requests

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();

    }
    //Get Request

    get(url,callback){

        this.xhr.open("GET",url); //Bağlantı açık

        // const temp = this;

        this.xhr.onload = function(){
            if(this.status === 200){
                callback(null,this.responseText); //isteğimiz bitti. Biz bu değeri
                //fonksiyonumuza gönderiyoruz.
            }
            else{
                //Hata durumu
                callback("Herhangi bir hata oluştu",null)
            }
        }

        this.xhr.send(); //İsteğimizi gönderiyoruz.
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if (err === null){
        //Başarılı
        console.log(response);
    }
    else{
        //Hata
        console.log(err)
    }
})

//Bu işlemimiz çalıştığında hata alıyoruz. Çünkü get(url) fonksiyonumuzun
//altındaki if koşullu durumunda this.xhr hatalı bir gösterim. Çünkü
//biz zaten this dediğimizde xhr objesini almış oluyoruz. Ama zaten xhr
//objesinin içindeyken tekrar this.xhr yazarsak bu bir hata durumuna sebep
//oluyor. Bu hatadan kurtulmanın en ilkel yolu yukardaki gibi bir temp 
//objesine this i atamak. 
//ikinci yöntemde zaten this xhr ı gösterdiği için this.status yazmak.
//3. yöntem ise this.xhr.onload fonksiyonunun bittiği süslü paranteze .bind(this)
//fonksiyonunu eklemek. Bunu yaptığımızda bizim bu fonksiyonumuzdaki this
//requestimizi göstermiş olacak
//4. yöntemde ise fonksiyonumuzu bir arrow function şeklinde yazmak.

//Bizim statusumuz 200 e eşitken verimizi yazdırdık. Fakat bi de hata durumunu
//yazmak için else olan durumu kullanmamız gerek. Bunun için callback
//fonksiyonuna 2 parametre göndermemiz gerekli. Bunun için hata olmayan
//durumda ilk parametre null olacak hata olan durumda ise veriyi çekeme
//yeceğimiz için ikinci parametre null olacak.

//Linkteki albumsten sonra /50 veya /51 yazdığımız zaman 50. ve 51. verileri
//verileri alıyoruz.

