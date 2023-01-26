//Setler Türkçe ismiyle kümeler anlamına geliyor. Bir değeri sadece bir kez taşıyor


const myset = new Set();

myset.add(100);
myset.add(100); //Aynı değer olduğu için hata vermeyecek ama eklemeyecek de
myset.add(3.14);
myset.add("Alperen");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2,c:3})

const myset2 = new Set([100,3.14,"Alperen"]) //Bu şekilde daha kısa şekilde
//değerlerimizi verebiliriz.

// console.log(myset);
// console.log(myset2);

// console.log(myset.size) //Eleman sayısını yazdırmak için.

//--Delete Metodu--

// myset.delete("Alperen");

//--Has metodu-- Değerin olup olmadığını sorguluyoruz.

// console.log(myset.has("Alperen"));
// console.log(myset.has(2000));
// console.log(myset.has([1,2,3]))

//--For Each--

// myset.forEach(function(value){
//     console.log(value)
// });

//--For of--

// for (let value of myset){
//     console.log(value)
// }

//--Setlerden array oluşturma--

const array = Array.from(myset);

console.log(Array)



