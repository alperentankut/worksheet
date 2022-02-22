let value ;


const Firstname = "Alperen";
const Lastname = "Tankut";

const lang = "Java , Javascript , Python";

value = Firstname + " " + Lastname;

value = value + " " + lang;

// value += " " + lang / += operatörü ile de ekleme yapabiliyoruz.

value = Firstname.length //Stringin içinde kaç eleman olduğunu gösteriyor.
value = Firstname.concat(" ",Lastname," ","Fzt") // Stringe karakter eklemek için kullanılır. 
value = Firstname.toLowerCase(); //Bütün harfleri küçültmek için
value = Firstname.toUpperCase(); //Bütün harfleri büyütmek için.

value = Firstname[0]; //stringdeki 0. indekse ulaşmak için kullanılır.

value = Firstname[3];

value = Firstname[Firstname.length - 1]; //Bunu stringin length ini bilmediğimiz durumlarda kullanabiliriz. Ve son karakteri verir.

// indexOf

value = Firstname.indexOf("r"); //karakterimizin kaçıncı indexte olduğunu gösterir. İçinde olmayan indexi yazarsak -1 sonucunu alırız.

//Split

value = lang.split(",") //split parçalamak anlamına geliyor. Virgülle ayrılan elemanları alacağımız için virgül kullanıyoruz. Bu komut 
//virgülle veya başka bir karakterle ayırdığımız stringleri parçalayıp bir array dizisinin içine yazıyor.

//Replace

value = lang.replace("Python" , "C++"); //önce değiştireceğimiz elemanı sonra yerine koymak istediğimiz elemanı yazıyoruz.

//Includes

value = lang.includes("Java"); //değerin içinde java var mı yok mu bunu sorguluyor(veya herhangi bir eleman). 
//Eğer varsa true yoksa false değerini döndürüyor.

console.log(value);