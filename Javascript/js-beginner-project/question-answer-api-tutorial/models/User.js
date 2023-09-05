const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name : {
        type : String,
        required : [true , "Please provide a name"],
    },
    email : {
        type : String,
        required : true,
        unique : [true,"Please try different email"],
        match : [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email"
        ]
    },
    role : {
        type : String,
        default : "user",
        enum : ["user","admin"]
    },
    password : {
        type : String,
        minlength : [6,"Please provide a password with min length 6"],
        required : [true,"Please provide a password"],
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    title : {
        type : String
    },
    about : {
        type : String
    },
    place : {
        type : String
    },
    website : {
        type : String
    },
    profile_image : {
        type : String,
        default : "default.jpg"
    },
    blocked : {
        type : Boolean,
        default : false
    }

})

//Yukarda yazdığımız match bir regex. Bunu yazmaktaki amacımız
//kişi örneğin alperen.com diye bir mail girdiğinde bunun geçersiz
//olduğunu ve gerçek mail formatında yazması gerektiğini söylüyoruz.


//role kısmında kullanıcının admin mi yoksa standart kullanıcı mı 
//olduğunu belirledik. Kullanıcı tiplerimizi enum içersinide tanımlıyoruz
//Bizim iki tip kullanıcımız olduğu için user ve admin olarak tanımladık

//Biz ilerde getAllUser fonksiyouyla bütün kullanıcı bilgilerini 
//çekeceğimiz zaman password bilgisini götermememiz lazım. Bunun için
//select : false şeklinde bir komut ekledik.