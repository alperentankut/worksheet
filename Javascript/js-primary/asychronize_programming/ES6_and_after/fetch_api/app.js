function getTextFile(){ //Text dosyası

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
getTextFile()

function getJsonFile(){ //Local bir Json dosyasından veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

getJsonFile()

function getExternalAPI(){
    fetch("https://api.exchangerate.host/latest")
    .then(response => response.json())
    .then(data => console.log(data.rates.TRY))
    .catch(err => console.log(err))
}
getExternalAPI()
//fetch api bizim window objemizin içinde bulunan bir metod sayesinde
//bu api ı kullanmamızı sağlayacak
//daha önceki derste gördüğümüz gibi then ile olumlu dönüşü yakalarken
//catch ile herhangi bir olumsuz durumu yakalıyoruz.

//Yukardaki yapımızda arrow function kullanarak oluşturduğumuz response
//un içindeki text dosyasını response.text fonksiyonuyla alıp return
//ediyoruz. Tek bir return işlemimiz olduğu için return yazmıyoruz. Bu
//arrow functionların bir özelliğiydi. Sonrasında bu return ettiğimiz 
//değeri then ile tekrar yakalıyoruz ve console a yazdırıyoruz ve text
//dosyamızın içeriğini görüyoruz.
//Biz text dosyası almak istediğimizde yukarıdaki gibi bir kullanım 
//yapıyoruz ama eğer JSON dosyası çekmek istersek .JSON fonksiyonun
//kullanacağız
//fetch api da belirtmediğimiz sürece get request yapıyor.

// "https://api.exchangerate.host/latest"
