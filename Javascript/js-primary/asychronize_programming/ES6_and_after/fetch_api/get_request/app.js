class Request {
    get(url){ //get request
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
        
    }
}

const request = new Request();
let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
.then(data => {
    albums = data;
    console.log(albums)
})
.catch(err => console.log(err));

// console.log(albums); Asenkron

//Biz burda verimizi sadece get fonksiyonu içerisinde yazdırabiliyoruz
//fonksiyon dışında elde edemiyoruz. Bunun önüne geçmek için ise promise
//yapısını oluşturabiliriz. Resolve ve rejectten veri geldiğinde bunları 
//then ve catch ile yakalıyoruz.
//Yukarda bütün kodları doğru yazmamıza rağmen undefined sonucunu alacağız
//bunun sebebi ise burda asenkron bir işlem olacak yani bizim veriyi çekmemiz
//için geçen sürede javascript önce console.log(albums) ' ü yazdıracak
//ama o sırada biz daha veriyi çekme sürecinde olduğumuz için böyle bir
//sonuç alacağız. Bunu düzeltmek için console.log(albums) u thenin içine
//yazmamız gerekiyor.