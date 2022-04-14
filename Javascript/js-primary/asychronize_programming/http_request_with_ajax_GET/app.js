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
    //Post Request

    // post(url,data,callback){
    //     this.xhr.open("POST" , url);
    //     this.xhr.setRequestHeader("Content-type", "application/json");

    //     this.xhr.onload = () => {
    //         if(this.xhr.status === 201) {
    //             //Başarılı
    //             callback(null,this.xhr.responseText);

    //         }
    //         else{
    //             callback("Hata oluştu" , null);
    //         }
    //     }

    //     this.xhr.send(JSON.stringify(data)); //JSON objesini stringe çevirdik


    // }
    put(url,data,callback){
        this.xhr.open("PUT" , url);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                //Başarılı
                callback(null,this.xhr.responseText);

            }
            else{
                callback(" Put request : Hata oluştu" , null);
            }
        }

        this.xhr.send(JSON.stringify(data)); //JSON objesini stringe çevirdik


    }
    delete(url,callback){

        this.xhr.open("DELETE",url); //Bağlantı açık

        // const temp = this;

        this.xhr.onload = function(){
            if(this.status === 200){
                callback(null,"Veri silme işlemi başarılı"); //isteğimiz bitti. Biz bu değeri
                //fonksiyonumuza gönderiyoruz.
            }
            else{
                //Hata durumu
                callback("Delete request : Herhangi bir hata oluştu",null)
            }
        }

        this.xhr.send(); //İsteğimizi gönderiyoruz.
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if (err === null){
//         //Başarılı
//         console.log(response);
//     }
//     else{
//         //Hata
//         console.log(err)
//     }
// })

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){
//     if(err === null){
//         console.log(album)
//     }
//     else{
//         //Hata
//         console.log(err);
//     }
// })
// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:141,title:"Tarkan Karma"},function(err,album){
//     if(err === null){
//         console.log(album)
//     }
//     else{
//         //Hata
//         console.log(err);
//     }
// })

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if (err === null){
        //Başarılı
        console.log(response);
    }
    else{
        //Hata
        console.log(err)
    }
})


//--GET--

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

//---POST---

//Biz verilerimizi post ederken bir JSON verisi gönderebiliriz veya
//bir form verisi gönderebiliriz. Bunu datayı gönderirken bir header
//olarak belirtmemiz gerekiyor. Bunu da setRequestHeader fonksiyonuyla
//yapıyoruz. İlk olarak content tipini yazıyoruz sonrasında da bunun 
//JSON olacağını söylüyoruz. Eğer nasıl yazacağımızı unutursak 
//setRequestHeader ajax şeklinde aratıp dökümana ulaşabiliriz. Normalde
//get requestte biz koşulumuzu 200 status code'una göre oluşturuyorduk
//ama post requestte 201-created kodunu kullanmamız lazım. Biz send ile 
//oluşturduğumuz datayı gönderiyoruz. Bunu da bir string objesiyle yapmamız
//gerekiyor. Yani JSON objemizi stringe dönüştürmemiz gerekiyor.

//---PUT---

//Put Request bir veriyi güncellememize(update) yarayan bir request tipi
//yapısı post requeste çok benziyor. Yukarda yaptığımız put requestten
//sonra albums/10 yazdığımız için id si 10 olan albümün yerine bizim
//yazdığımız album gelecek

//---DELETE---

//Get requeste oldukça benziyor. İd yi belirtip sil komutunu gönderiyoruz
//bize response olarak boş bir obje dönüyor.

