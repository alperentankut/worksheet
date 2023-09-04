const express = require("express");
const dotenv = require("dotenv")
const connectDatabase = require("./helpers/database/connectDatabase")
const routers = require("./routers")



//Enviroment Variables

dotenv.config({
    path : "./config/env/config.env"
})

//MongoDb Connections

connectDatabase()

const app = express();
const PORT = process.env.PORT;


//Routers Middleware

app.use("/api",routers)

app.listen(PORT,()=>{
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`)
});


// //Normalde dotenv.config config klasöründeki config.env
// //dosyasına bakıyor fakat bizim bi alt klasörümüz 
// //olduğu için yolu tanımlıyoruz

// //yukardaki yazdığımız process.env.PORT projemiz
// //başka bilgisayarlarda çalışırken 5000 portunda çalış-
// //amazsa uygun portta çalışmasını sağlıyor.

// app.get("/api/questions",(req,res)=>{
//     res.send("Question Home Page")
// })

// //Biz yukarda /api/questions yoluna gidildiğinde yapılmasını
// //istediğimiz şeyleri yazacağız.



//Biz bütün route larımızı buraya yazdığımız takdirde ilerde kodun
//bakımı zorlaşacaktır. Bundan dolayı modüler hale getirmek daha 
//kullanışlı olacaktır. Bunu da routers klasörü oluşturup burda yapabiliriz.


// app.use("/api/questions",question)
//app.use("/api/auth",auth)
//biz yapımızı daha moduler hale getirmek adına 
//bu middleware lerimizi index.js içinde yazacağız.