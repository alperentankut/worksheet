let value;

const programmer = {

    name: "Alperen Tankut",
    age: 25,
    langs: ["Python", "Javascript", "Java"],

    adress: {
        city: "Gaziantep",
        street: "Batıkent",
        apartment: "Baran",

    },

    work: function () {
        console.log("Programcı çalışıyor..")
    },

}
value = programmer;

value = programmer.age; //metoddaki herhangi bir değere erişmek istersek bu şekilde kullanıyoruz.
value = programmer.langs[2];
value = programmer.adress.city;

programmer.work();

const programmers = [
    {name : "Alperen Tankut" , age : 25},
    {name : "Mehmet" , age : 20},
];
value = programmers[1];
value = programmers[1].age;


console.log(value);