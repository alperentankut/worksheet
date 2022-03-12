function Employee (name,age){
    this.name = name;
    this.age = age;
//     this.showInfos = function(){
//         console.log("İsim : " + this.name + "Yaş : " + this.age);
//     }
}

Employee.prototype.showInfos = function(){
    console.log("İsim : " + this.name + "Yaş : " + this.age)
}


const emp1 = new Employee("Alperen" , 25)
const emp2 = new Employee("Kemal" , 17)

console.log(emp1)
console.log(emp2)

//Biz metodlarımızı prototype 'e (constructor) yazarsak daha avantajlı oluruz. Çünkü
//biz constructor a yazdığımızda o metodu her çağırdığımızda bi kere kullanmış oluyoruz.
//eğer constructor a değil de objeye yazarsak her yeni objemizde birbirinin kopyası
//metodlarımız olacak. Ama bu metodu constructor a yazarsak dire constructor'ımızın
//prototype'inde olacak ve her objemizde prototype den çağıracağız. Biz 100
//tane o metodu kullandığımız obje oluştursak da bellekte sadece 1 tane olduğu için
//işlem kalabalığı olmuyor. Ama bunları objeye yazarsak her objede bellekte ekstra 
//yer kaplayacak. Yani özetle belleğimizi gereksiz yere işgal etmiyoruz. Bunu da yukar-
//ıdaki employee.prototype ile yazdığımız komutla yapıyoruz.
