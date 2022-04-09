const person = {
    age : 25,

    // tellAge : function(){

    //     //Bu fonksiyonun içinde this person objemizi gösteriyor.
    //     console.log(this)
    //     console.log(this.age);
    // }.bind(this)

    tellAge: () => {
        console.log(this);
        console.log(this.age)
    }

    //burdaki this window objemizi gösteriyor.
}

person.tellAge();

//Biz arrow function yazsak bile arka planda yukardaki gibi fonksiyona çevriliyor.
//onun için yine this age dediğimizde undefined değerini alıyoruz. Yine bind
//ile globaldeki this objemizi bağlamışız gibi yapılıyor.