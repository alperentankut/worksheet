const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    name : {
        type : String,
        required : [true , "Please provide a name"],
    },
    email : {
        type : String,
        required : [true,"Please provide a email"],
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

});

UserSchema.pre("save",function(next){
    console.log("Pre hooks : Save");
    next()
})

//Yukarda yazdığımız kod mongoose ile gelen bir
//hook özelliği. Burda pre fonksiyonuyla save
//işleminden hemen sonra yapmak istediğimiz 
//fonksiyonu yazıyoruz. Fonksiyonun ilk parametresi
//hangi işlemden önce yapılmasını istiyorsak o 
//işlemi alıyor ikinci parametre ise yazmak istediğimiz
//fonksiyonu.

module.exports  = mongoose.model("User" , UserSchema)

//Yukardaki export ile oluşturduğumuz UserSchema yı User ismiyle
//mongoose a kaydediyoruz.

//Yukarda yazdığımız match bir regex. Bunu yazmaktaki amacımız
//kişi örneğin alperen.com diye bir mail girdiğinde bunun geçersiz
//olduğunu ve gerçek mail formatında yazması gerektiğini söylüyoruz.


//role kısmında kullanıcının admin mi yoksa standart kullanıcı mı 
//olduğunu belirledik. Kullanıcı tiplerimizi enum içersinide tanımlıyoruz
//Bizim iki tip kullanıcımız olduğu için user ve admin olarak tanımladık

//Biz ilerde getAllUser fonksiyouyla bütün kullanıcı bilgilerini 
//çekeceğimiz zaman password bilgisini götermememiz lazım. Bunun için
//select : false şeklinde bir komut ekledik.