

let value;

value = document.all;
value = document.all.length; //Sayfamızda kaç tane element olduğunu yazdırır. 
value = document.all[6];

const elements = document.all;

// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i]);

// }

const documents = document.all; //Html Collection

// documents.forEach(function(element){
//     console.log(element);

// }); Burda documents bir html collection olduğu için forEach metodu ile üzerinde gezinemiyoruz. Bunu yapmak için documents i array
// e çevirmemiz gerekli

// const collections = Array.from(document.all);

// collections.forEach(function(collection){
//     console.log(collection);
// });

value = document.body;
value = document.head;
value = document.location.hostname

console.log(value);