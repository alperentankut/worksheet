const multer = require("multer");
const path = require("path");
const CustomError = require("../../helpers/error/CustomError");

//Storage , FileFilter

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const rootDir = path.dirname(require.main.filename);
    cb(null, path.join(rootDir, "/public/uploads"));
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split("/")[1];
    //yukardaki fonksiyonad örneğin bize gelen resim
    //asdf/png olsun biz bunun dosya tipini alıp filtrelemek
    //için splitle [asdf,png] şeklinde array oluşturup
    //1. indeksi olarak dosya tipini seçiyoruz.
    req.savedProfileImage = "image_" + req.user.id + "." + extension;
    cb(null, req.savedProfileImage);

    //multer'a fotoğrafı yukardaki isimle kaydet talimatını verdik
  },
});

const fileFilter = (req,file,cb) =>{
    let allowedMimeTypes = ["image/jpg","image/gif","image/jpeg","image/png"]

    if(!allowedMimeTypes.includes(file.mimetype)){

        return cb(new CustomError("Please provide a valid image file",400),false)
        //eğer dosya tipimiz doğru değilse false verip işlemi durduruyoruz.
    }
    return cb(null,true)

}

const profileImageUpload = multer({storage,fileFilter})

module.exports = profileImageUpload;


//destination bizim dosyayı nereye kaydedeceğimizi
//multer a bildirecek. ve bir fonksiyon olacak
//file bizim dosyamızı cb ise callback fonksiyonumuzu
//gösterecek. Bu callback ile hata yakalayabilir veya
//işleme devam edebiliriz.
