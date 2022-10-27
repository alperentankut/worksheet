//Kalıtım - İnhetirance

//!!!Bir objenin başka bir objeden metodlarını veya 
//özelliklerini miras almasıdır.!!!

function Person(name,age){
    this.name = name,
    this.age = age
};
Person.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yaş : " + this.age);

}

// const person = new Person("Alperen" , 26)
// console.log(person);

function Employee(name,age,salary){
    // this.name = name,
    // this.age = age,
    Person.call(this,name,age); //Bu metodla Person objesindeki name ve age i çağırdık.
    this.salary = salary
}
Employee.prototype.showInfos = function(){
    console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
}


//Biz ilk yazdığımız showInfosta salary özelliği vermemiştik. Bunu ekleyebilmek
//için biz tekrar showInfos metodunu yazdık. Buna overriding deniliyor. Objeler
//prototype 'lardan metod çağırırken sırasıyla bir üst prototype a gittiği için
//ilk bulduğu metodu kullanıyor.

Employee.prototype = Object.create(Person.prototype); //Burda person prototype
//dan metodları miras aldık ve Employee ' ye ekledik.

const emp = new Employee("Alperen" , 26 , 4500);


// console.log(emp);
// console.log(emp.toString());
console.log(emp);


//Yukardaki toString metodunu kendi oluşturduğumuz objelere yazmadık. Peki bu 
//nerden geldi ? Bu metodu yazdığımızda önce kendi yazdığımız objenin prototype
//ına bakıyor. Burda yok. Sonra miras aldığımız Person prototype ına bakıyor
//burda da yok. En son bizim en temel object prototoype'ımıza bakıyor ve bu 
//metod orda var olduğu için metod kullanılıyor.

