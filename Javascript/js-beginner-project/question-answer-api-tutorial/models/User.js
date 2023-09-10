const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email",
    ],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    minlength: [6, "Please provide a password with min length 6"],
    required: [true, "Please provide a password"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  place: {
    type: String,
  },
  website: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "default.jpg",
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpire: {
    type: Date,
  },
});

//UserSchema Methods

UserSchema.methods.generateJwtFromUser = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

  const payload = {
    id: this._id,
    name: this.name,
  };
  const token = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRE,
  });
  return token;
};

//Pre hooks

UserSchema.methods.getResetPasswordTokenFromUser = function () {
  const randomHexString = crypto.randomBytes(15).toString("hex");
  const {RESET_PASSWORD_EXPIRE} = process.env
  const resetPasswordToken = crypto
    .createHash("SHA256")
    .update(randomHexString)
    .digest("hex");

  this.resetPasswordToken = resetPasswordToken,
  this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE);
  //Şu anki zamandan 1 saat sonrasına kadar geçerli olacak

  return resetPasswordToken;
};

UserSchema.pre("save", function (next) {
  //if password not change
  if (!this.isModified("password")) {
    next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

//Yukarda yazdığımız kod mongoose ile gelen bir
//hook özelliği. Burda pre fonksiyonuyla save
//işleminden hemen önce yapmak istediğimiz
//fonksiyonu yazıyoruz. Fonksiyonun ilk parametresi
//hangi işlemden önce yapılmasını istiyorsak o
//işlemi alıyor ikinci parametre ise yazmak istediğimiz
//fonksiyonu.
//Biz parolamız değişmemişse fonksiyonun boşa çalışmaması için
//mongoose içerisinde bulunan isModified fonksiyonunu kullanabiliriz
//Bu fonksiyonda içine girdiğimiz değer değişmişse true
//değişmemişse false gönderiyor.

module.exports = mongoose.model("User", UserSchema);

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
