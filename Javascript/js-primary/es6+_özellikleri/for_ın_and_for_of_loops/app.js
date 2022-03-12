const person = {
    name : "Alperen",
    age : 26,
    salary : 3000
};

const langs = ["Python" , "Java" , "C++" , "Php"];

const name = "Mustafa";


//##For In##
//Object

//  for(let prop in person) {
//      console.log(prop,person[prop]);
//  }

//Array

// for(let index in langs){
//     console.log(index,langs[index]);
// }
//langs[index] diyerek ona karşılık gelen değeri alabiliyoruz.

//String

// for(let index in name) {
//     console.log(index , name[index]);
// }

//##For of##

//Bu operatörle objelerimiz üzerinde gezinemiyoruz. Sadece array ler ve 
//array e benzeyen veri tipleri üzerinde gezinebiliyoruz.

// for (let value of langs){
//     console.log(value);
// }

//String

for (let character of name){
    console.log(character)
}