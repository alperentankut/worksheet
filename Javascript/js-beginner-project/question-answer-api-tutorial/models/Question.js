const mongoose = require("mongoose");
const slugify = require("slugify");
//loadash
//jio

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
    minlength: [10, "Please provide a title at least 10 characters"],
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Please provide a content"],
    minlength: [20, "Please provide a title at least 20 characters"],
  },
  slug: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId, //soruyu soran kullanıcı id si
    required: true,
    ref: "User", //User verimize referans vereceğimiz için yazdık.
    //özetle soruyu soran kişinin id sini object id ile alıyoruz
    //ve kullanıcı bilgilerini User dan referans ile alabiliyoruz.
  },
  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
  answers : [
    {
        type : mongoose.Schema.ObjectId,
        ref : "Answer"
    }
  ]
});

QuestionSchema.pre("save", function (next) {
  if (!this.isModified("title")) {
    next();
  }
  this.slug = this.makeSlug();
  next();
});

//slug işlemimizi sorumuz hemen kaydedilmeden önce yapıyoruz.

QuestionSchema.methods.makeSlug = function () {
  return slugify(this.title, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};

module.exports = mongoose.model("Question", QuestionSchema);

//slug dediğimiz değer bizim sayfamızdaki örneğin bu bir sorudur alanına
//gittiğimizde url adresimizde de bu-bir-sorudur şeklinde görünmesini
//istediğimiz alandır. eğer tek bir değer vereceksek süslü parantez olmadan
//direk slug : String şeklinde yazabiliriz.
