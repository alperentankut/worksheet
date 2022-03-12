//Diğer diller (C# , Java , Python) class tabanlı diller. Yani bir class
//oluşturup o classlardan objeleri üretiyoruz. Ancak Javascript prototype
//tabanlı bir dildir. Javascriptte her objemizin bir prototype özelliği vardır.


function Employee(name,age){
    this.name = name,
    this.age = age
    this.showInfos = function(){
        console.log("Bilgiler Gösteriliyor...")
    }
}

const emp1 = new Employee("Alperen" , 25);
console.log(emp1)

//console da Employee içinde iki tane proto görüyoruz. Biz bi tane obje oluşturduk
//bunun prototype i de Employee prototype. Bizim en temel objemiz object olduğu için
//bu Employee prototype aslında object prototype ine de sahip. Burda mantık olarak
//bir prototype zinciri görüyoruz. (Prototype chain). Peki bu neden böyle ? ;
//Aşağıdaki kodu yazdığımızda console da iki tane object göreceğiz. Biz toString
//metodunu yazmadık bu kendiliğinden geldi. İşte bu metod bizim en temel objemizden
//geliyor. Yani object prototype'inde yazılan (en temel prototype) metodları
//miras alıyoruz. Prototype bizim objeler arası kalıtım (interihance) yapmamıza
//yarıyor. Eğer prototype imiz olmasaydı biz object prototype'indeki metodları
//miras alamayacaktık.

console.log(emp1.toString());