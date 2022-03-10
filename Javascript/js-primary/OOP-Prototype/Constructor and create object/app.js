
const emp1 = { //Object Literal
    name : "Alperen",
    age : 25,
    showInfos : function() {console.log("Bilgiler Gösteriliyor..");} 
};
const emp2 = {
    name : "Oguzcan",
    age : 25
};

emp1.salary = 4500 //yeni bir değer eklemek için kullanıyoruz.
emp1.showInfos();

console.log(emp1);