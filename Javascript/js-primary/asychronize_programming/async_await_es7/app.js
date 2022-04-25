async function test(data){
    // 
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Bu bir değer..");
        },2000);
    })
    
    let response = await promise  //5 saniye bekleyecek

    return response
};

    


test("Merhaba").then(response => console.log(response))

//Burdaki async anahtar kelimesi bir fonksiyonun mutlaka bir promise
//döneceğini söylüyor. Ancak biz yukarda herhangi bir promise dönmüyoruz
//bu yüzden burda async anahtar kelimesini yazdığımız için return'deki
//datayı otomatik olarak promise deki resolve a ekliyor.
//Await anahtar kelimesi ise bir promise in resolve etmesini bekleyen
//bir anahtar kelime. Yukarda o beklenen 2 saniyelik sürede await 
//bekliyor ve alt satırları çalıştırmıyor. Yukarda normalde önce naber
//yazılı console.log komutunun çalışması gerekiyor ama await buna
//izin vermiyor ve bekletiyor. await sadece async fonksiyonlarının içinde 
//çalışıyor.
//async fonksiyonlar mutlaka promise dönmek zorunda. Ancak biz promise
//dönmedik return response döndük. Bu kendisi promise yapısına çevirecek