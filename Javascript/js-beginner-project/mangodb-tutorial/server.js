const express = require("express");
const {accessControl} = require("./middleware")

const users = [
  { id: 1, name: "Alperen Tankut", place: "Gaziantep" },
  { id: 2, name: "Oğuzcan Budumlu", place: "Ankara" },
];

const app = express();
const PORT = 5000;
app.use(express.json()) //Biz bu middleware i kullanmadığımız zaman
//post ettiğimiz json verisi undefined olarak gözükecektir
// app.use(accessControl); //Uygulama kapsamı
app.get("/users",accessControl, (req, res, next) => {
    res.json({
        success : true,
        data : users
    })
});

app.post("/users",(req,res,next) => {
    users.push(req.body)
    res.json({
        success : true,
        data : users
    })
})
app.put("/users/:id",(req,res,next) => {
    // console.log(req.params.id); //gelen id bir str bunu int e çevirebiliriz.
    const id =parseInt(req.params.id)
    for(let i = 0 ; i<users.length ; i++){
        if(users[i].id === id){
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }
    res.json({
        success : true,
        data : users
    })
})
app.delete("/users/:id",(req,res,next) => {
    const id = parseInt(req.params.id)
    for(let i = 0 ; i<users.length ; i++){
        if(users[i].id === id){
            users.splice(i,1)
            
        }
    }
    
    res.json({
        success : true,
        data : users
    })
})

//yukarda middleware i tek bir route üzerinde kullandık. Uygulama
//kapsamındaki kullanımı ise en üstte gösteriliyor.

//Yukarıda yazılan kod bize bir get request atıldığında buna nasıl
//cevap vereceğimizi anlatıyor.
//callback fonksiyonundaki res bizim döneceğimiz response u tanımlıyor.
//bize bir get request geldiğinde biz hello express stringini send etmiş
//oluyoruz.
//biz res.send ile hello express yazısını gönderdik. Eğer json göndermek
//istersek res.json kullanıyoruz


app.listen(PORT, () => {
  console.log("server started PORT:" + PORT);
});

//Biz bir istek attığımızda örneğin kullanıcının giriş yapıp yapmadığını
//sorgulamamız gereken bir request olsun. Bunu birçok kullanıcıda tek tek 
//yapmak yerine middleware function denilen bir ara katmanda yapıyoruz. request 
//handler ile bunu sorguladıktan sonra next ile bir sonraki aşamaya geçiyoruz.
//birden fazla middleware kullanabilliriz. her middlaware den sonra bir sonraki
//aşamaya geçmek için next i kullanmamız gerekiyor. Eğer next metodunu
//kullanmazsak istek atılır ve response edemediğimiz için cevap alamayız.
//Middleware kullanmak için use metodunu kullanıyoruz. Eğer uygulama
//kapsamında kullanmak istiyorsak route'lardan önce kullanıyoruz.
//veya tek bir route a özgü olarak kullanabiliyoruz.