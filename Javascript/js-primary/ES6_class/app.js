// Syntactic Sugar

// function Employee(name,age,salary){
//     this.name = name,
//     this.age = age,
//     this.salary = salary
// };

// Employee.prototype.showInfos = function(){
//     console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary )
// };
// const emp = new Employee("Mustafa" , 26 , 4500);

// console.log(emp);

class Employee {

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary )

    }

}

const emp = new Employee("Alperen" , 26 , 4500);

console.log(emp)

emp.showInfos()

//Yukarda constructor ile oluşturduğumuz yapı es6 da gelen bir özellik ve
//bu şekilde yazılıyor.