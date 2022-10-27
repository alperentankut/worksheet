
//     const emp1 = { //Object Literal
//      name : "Alperen",
//      age : 25,
//      showInfos : function() {console.log("Bilgiler Gösteriliyor..");} 
//  };
//      const emp2 = {
//       name : "Oguzcan",
//       age : 25
//   };

//  emp1.salary = 4500 //yeni bir değer eklemek için kullanıyoruz.
//  emp1.showInfos(); 

//  console.log(emp1);



// function Employee(){ //Constructor (Yapıcı) fonskiyon 
//     this.name = "Alperen";
// }

//Örneğin biz daha önce new Date() fonksiyonuyla date objesini alabiliyorduk
//aslında bu new Date js geliştiricileri tarafından yazılmış hazır bir obje 
//Bizde yukarda Employee şeklinde kendimiz bir obje oluşturduk. Bunu kullanırken
//new Employee şeklinde kullanıyoruz. Ancak yukardaki gibi yazmak pek de mantıklı
//değil. Çünkü bu constructor'ı kullandığımızda bütün name özelliklerimiz alperen
//olacak

function Employee(name,age,salary){
    this.name = name,
    this.age = age,
    this.salary = salary;

    console.log(this) //burdaki this Employee yi verecek. Global scope
    //da kullansaydık window objesini verecekti
}

 const emp1 = new Employee("Alperen" , 25 , 4500);
 const emp2 = new Employee("Oguz" , 25 , 20000);

 

 


