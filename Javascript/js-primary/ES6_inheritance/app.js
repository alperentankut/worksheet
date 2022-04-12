// function Person(name,age){
//     this.name = name,
//     this.age = age
// }

// Person.prototype.showInfos = function(){
//     console.log("İsim : " + this.name + " Yaş : " + this.age)
// };

// function Employee(name,age,salary){
//     Person.call(this.name,age);
//     this.salary = salary;
// }
// Employee.prototype = Object.create(Person.prototype); //Kalıtım burda gerçekleşiyor
// Employee.prototype.toString = function(){
//     console.log("Employee");
// }

// Employee.prototype.showInfos = function(){
//     console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary) 
// }

// const emp = new Employee("Alperen" , 26 , 4500)

class Person { //Superclass , Baseclass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim : " + this.name + " Yaş : " + this.age)
    }
}

class Employee extends Person{

    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        // super.showInfos();
        super(name,age);
        this.salary = salary;
    }
    showInfos(){ //Overriding
        console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary)

    }

    raiseSalary(amount) {
        this.salary += amount;
    }
}
const emp = new Employee("Alperen" , 26 , 4500)

// console.log(emp)

emp.raiseSalary(500);
emp.showInfos()




//extends anahtar kelimesiyle Person constructor'ının 
//tüm metodlarını Employee' e  geçirmiş oluyoruz.
 
//Bizim en üst classımız olan person Superclass veya Baseclass ismiyle
//kullanılabilir.
//Persondan türeyen Employee ise Derivedclass , Subclass veya Childclass
//olarak adlandırılabilir.
//Constructor'ın altındaki super anahtar kelimesi bizim en üst classı 
//kullanmak istediğmizi belirtiyor. super anahtar kelimesiyle yaptığımız
//işlem this.age ve this.name ile yaptığımız işlemin aynısı.
