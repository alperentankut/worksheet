// const obj = {
//     test1 : function(){
//         console.log("Test 1")
//     },
//     test2 : function(){
//         console.log("Test 2")
//     }
// }
// // console.log(obj);

// const emp = Object.create(obj); // Bu işlem obj objemizin proto özelliğini
// //emp değişkenine bağlamamızı sağlıyor. Bu işlemi inheritance(kalıtım)
// //işlemlerimizde kullanıyoruz.

// console.log(emp);


function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}

function Employee(name,age){
    this.name = name,
    this.age = age
};

Employee.prototype = Object.create(Person.prototype)

Employee.prototype.myTest = function(){
    console.log("MyTest")
}

//Yukardaki kodda şunu demek istedik ; Employee objesinin prototype i 
//object prototype ini değilde Person objesinin prototype'ini göstersin.

const emp = new Employee("Alperen" , 25)

console.log(emp);

// emp.test1 //İnheritance işlemini yaptığımız için Person objesindeki test1
//fonksiyonunu çağırabildik.