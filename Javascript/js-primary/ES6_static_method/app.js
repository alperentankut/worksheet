 //Static Method

class Matematik {
     static cube(x) {
         console.log(x*x*x)
     }
}

// const math = new Matematik();
// math.cube(3)

// console.log(math)

//Normalde bizim bu metodu kullanmak için math objesini oluşturup 
//kullanmam gerekiyor. Ama biz static anahtar kelimesini kullanırsak.
//obje oluşturmadan bu metodu kullanabiliriz. 

// Matematik.cube(4); //Bu şekilde obje oluşturmadan kullanabiliriz.

//!! Bizim static metodlarımız o objenin prototype'ine yazılmıyor.!!
//Biz bu yüzden bunlara obje üzerinden erişemiyoruz. 